function validate()
      {
      
         if( document.myForm.fname.value == "" )
         {
            alert( "Please provide your First name!" );
            document.myForm.fname.focus() ;
            return false;
         }
               
         if( document.myForm.lname.value == "" )
         {
            alert( "Please provide your Last name!" );
            document.myForm.lname.focus() ;
            return false;
         }
		 
         if( document.myForm.email.value == "" )
         {
            alert( "Please provide your Email!" );
            document.myForm.EMail.focus() ;
            return false;
         }
         if( document.myForm.dob.value == "" )
         {
            alert( "Please provide your Date of Birth!" );
            document.myForm.dob.focus() ;
            return false;
         }
         if( document.myForm.pnum.value == "" )
         {
            alert( "Please provide your Phone Number!" );
            document.myForm.pnum.focus() ;
            return false;
         }
         
         if( document.myForm.gender.value == "-1" )
         {
            alert( "Please provide your Gender!" );
            return false;
         }
         return( true );
      }