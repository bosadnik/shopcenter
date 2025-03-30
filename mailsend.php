<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';





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



// Send email


$mail = new PHPMailer(true);
try {
    $mail->isSMTP();

    
    // $mail->Host = 'pro.turbo-smtp.com';
    // $mail->SMTPAuth = true;
    // $mail->Username = 'bartlomiej@osadnik.com';
    // $mail->Password = 'WECC8eC9';
   
    $mail->Host = 'ssl0.ovh.net';
    $mail->SMTPAuth = true;
    $mail->Username = 'Web.kontakt@shopcenter.pl';
    $mail->Password = 'exxN58324@@BcV';
   
   
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $emailFrom = 'Web.kontakt@shopcenter.pl';

    $mail->setFrom($emailFrom, 'Formularz');
    // $mail->addAddress('bartlomiej.osadnik@gmail.com');
    $mail->addAddress('piotr@shopcenter.pl');
    

    $mail->Subject = 'Wiadomość ze strony www.shopcenter.pl';
    
    // Set proper email format
    $mail->isHTML(false);                    // Set email format to plain text
    $mail->CharSet = 'UTF-8';               // Set proper character encoding
    
    // Set the message body
    $mail->Body = $emailContent;

    // Handle file attachment if present
    $tempFile = null;
    error_log(empty($data['file']));
    if (!empty($data['file'])) {
        try {
            // Debug: Log the start of file processing
            error_log("Starting file attachment processing");
            error_log("File data length: " . strlen($data['file']));
            
            // Extract file type from base64 string
            $matches = [];
            if (preg_match('/^data:(.+);base64,/', $data['file'], $matches)) {
                $mimeType = $matches[1];
                error_log("Detected MIME type: " . $mimeType);
                
                // Get file extension from MIME type
                $extensions = [
                    'application/pdf' => 'pdf',
                    'application/msword' => 'doc',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document' => 'docx',
                    'application/vnd.ms-excel' => 'xls',
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' => 'xlsx',
                    'application/vnd.ms-powerpoint' => 'ppt',
                    'application/vnd.openxmlformats-officedocument.presentationml.presentation' => 'pptx',
                    'text/plain' => 'txt',
                    'application/rtf' => 'rtf',
                    'application/vnd.oasis.opendocument.text' => 'odt',
                    'application/vnd.oasis.opendocument.spreadsheet' => 'ods',
                    'application/vnd.oasis.opendocument.presentation' => 'odp',
                    'image/jpeg' => 'jpg',
                    'image/png' => 'png',
                    'image/gif' => 'gif',
                    'image/bmp' => 'bmp',
                    'image/webp' => 'webp'
                ];
                $extension = isset($extensions[$mimeType]) ? $extensions[$mimeType] : 'bin';
            } else {
                // Try to get extension from original filename if available
                if (isset($data['fileName'])) {
                    $extension = pathinfo($data['fileName'], PATHINFO_EXTENSION);
                } else {
                    $extension = 'bin';
                }
                $mimeType = 'application/octet-stream';
            }
            
            // Clean base64 data
            $cleanedData = preg_replace('/^data:.*?;base64,/', '', $data['file']);
            error_log("Cleaned base64 data length: " . strlen($cleanedData));
            
            // Decode base64 file data
            $fileData = base64_decode($cleanedData);
            if ($fileData === false) {
                throw new Exception('Failed to decode base64 data');
            }
            error_log("Base64 data decoded successfully. Decoded size: " . strlen($fileData) . " bytes");

            // Create temporary directory if it doesn't exist
            $tempDir = __DIR__ . '/temp';
            if (!file_exists($tempDir)) {
                mkdir($tempDir, 0777, true);
            }
            
            // Generate unique filename with correct extension
            $fileName = "attachment_" . time() . "." . $extension;
            $tempFile = $tempDir . '/' . $fileName;
            error_log("Using file path: " . $tempFile);

            // Write data to file
            $bytesWritten = file_put_contents($tempFile, $fileData);
            if ($bytesWritten === false) {
                throw new Exception('Failed to write to temporary file');
            }
            error_log("Wrote " . $bytesWritten . " bytes to file");

            // Verify file exists and is readable
            if (!file_exists($tempFile)) {
                throw new Exception("File does not exist after writing");
            }
            
            if (!is_readable($tempFile)) {
                throw new Exception("File is not readable after writing");
            }
            
            error_log("File exists and is readable");
            error_log("Final file size: " . filesize($tempFile));
            
            // Add attachment to email
            $mail->AddAttachment($tempFile, $fileName);
            error_log("Added attachment to email");
            
        } catch (Exception $e) {
            error_log("File attachment error: " . $e->getMessage());
            if ($tempFile !== null && file_exists($tempFile)) {
                unlink($tempFile);
            }
            $response['message'] = 'File attachment error: ' . $e->getMessage();
            echo json_encode($response);
            exit;
        }
    }

    // Send the email
    if (!$mail->send()) {
        throw new Exception('Mailer Error: ' . $mail->ErrorInfo);
    }
    error_log("Email sent successfully");
    $response['success'] = true;
    $response['message'] = 'Email sent successfully';

    // Clean up temporary file after email is sent
    if ($tempFile !== null && file_exists($tempFile)) {
        if (!unlink($tempFile)) {
            error_log("Warning: Failed to delete temp file: " . $tempFile);
        } else {
            error_log("Successfully deleted temp file: " . $tempFile);
        }
    }

} catch (Exception $e) {
    error_log("General error: " . $e->getMessage());
    $response['message'] =  $e->getMessage();
}

echo json_encode($response);
?>
