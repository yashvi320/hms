<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hospital";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST['first-name'];
    $last_name = $_POST['last-name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $contact = $_POST['contact'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $dob = $_POST['dob'];
    $emergency_contact = $_POST['emergency-contact'];
    $emergency_phone = $_POST['emergency-phone'];
    $primary_doc = $_POST['primary-doc'];
    
    // Current registration date
    $reg_date = date("Y-m-d");
    $patient_status = 1; // Assuming active patient
    $medical_hist = 0; // Assuming no medical history initially

    $sql = "INSERT INTO Patient (fnmae, lname, age, gender, contact, email, address, DOB, reg_date, patient_status, emegre_contact, emegre_phone_no, doc_id, medical_hist) 
            VALUES ('$first_name', '$last_name', '$age', '$gender', '$contact', '$email', '$address', '$dob', '$reg_date', '$patient_status', '$emergency_contact', '$emergency_phone', '$primary_doc', '$medical_hist')";
    
    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Patient registered successfully!'); window.location.href='patient.html';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
