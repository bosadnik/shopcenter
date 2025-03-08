<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Function to validate email
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Function to sanitize input
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Get JSON data from POST request
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Initialize response array
$response = array(
    'success' => false,
    'message' => ''
);

// Validate required fields
if (empty($data['name']) || empty($data['email']) || empty($data['phone']) || empty($data['message'])) {
    $response['message'] = 'All fields are required';
    echo json_encode($response);
    exit;
}

// Validate email
if (!validateEmail($data['email'])) {
    $response['message'] = 'Invalid email format';
    echo json_encode($response);
    exit;
}

// Sanitize inputs
$name = sanitizeInput($data['name']);
$email = sanitizeInput($data['email']);
$phone = sanitizeInput($data['phone']);
$message = sanitizeInput($data['message']);

// Email settings
$to = "bartlomiej@osadnik.com"; // Changed recipient email
$subject = "New Contact Form Submission from " . $name;

// Prepare email content
$emailContent = "Name: $name\n";
$emailContent .= "Email: $email\n";
$emailContent .= "Phone: $phone\n\n";
$emailContent .= "Message:\n$message";

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Handle file attachment if present
if (!empty($data['file'])) {
    // Decode base64 file data
    $fileData = base64_decode(preg_replace('#^data:.*?;base64,#', '', $data['file']));
    $fileName = "attachment_" . time() . ".pdf"; // You might want to get the actual filename from the data
    
    // Create temporary file
    $tempFile = tempnam(sys_get_temp_dir(), 'mail_');
    file_put_contents($tempFile, $fileData);
    
    // Add file attachment to email
    $boundary = md5(time());
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    
    $message = "--$boundary\r\n";
    $message .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $message .= chunk_split(base64_encode($emailContent));
    
    $message .= "--$boundary\r\n";
    $message .= "Content-Type: application/pdf; name=\"$fileName\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= "Content-Disposition: attachment\r\n\r\n";
    $message .= chunk_split(base64_encode(file_get_contents($tempFile)));
    
    $message .= "--$boundary--";
    
    // Clean up temporary file
    unlink($tempFile);
} else {
    $message = $emailContent;
}

// Send email
if (mail($to, $subject, $message, $headers)) {
    $response['success'] = true;
    $response['message'] = 'Email sent successfully';
} else {
    $response['message'] = 'Failed to send email';
}

echo json_encode($response);
?>
