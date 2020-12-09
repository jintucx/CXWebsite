<?php
       $name = $_REQUEST['name'];
        $email_id = $_REQUEST['email']; 
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        // More headers
        $headers .= 'From: Test<>' . "\r\n"; 
        $message ="
        <html>
            <body>
                <h4>Thanks for subscrition !</h4>
            </body>
        </html>
        ";
         
        mail($email_id,"Newsletter Subscription",$message,$headers);
          
?>