import {initializeApp} from 'firebase/app'
import {getFirestore } from 'firebase/firestore';
import {doc, setDoc} from 'firebase/firestore';
import { getAuth,onAuthStateChanged} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "8",
  appId: "",
  measurementId: ""
};

  //init firebase app
  const app=initializeApp(firebaseConfig)

  //init services
  const db=getFirestore(app);
  const auth = getAuth();

   //Testing to fetch the Document Data

   /*(async () => {
    try {
    const docRef = doc(db, "Class_five","Section_A","1","MidTerm");
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
      console.log(docSnap.data());
  } else {
      console.log("Document does not exist")
  }
    } catch (e) {
    console.error("No such document!");
    }
  })();*/

  document.getElementById("submit").addEventListener("click", Filling_roster);


    
  
  
    document.getElementById("Total_Eng_marks").addEventListener("click", Total_Eng_Function);
    document.getElementById("Total_Gra_marks").addEventListener("click", Total_Gra_Function);
    document.getElementById("Total_MIL_marks").addEventListener("click", Total_MIL_Function);
    document.getElementById("Total_Mth_marks").addEventListener("click", Total_Mth_Function);
        
    document.getElementById("Total_ST_marks").addEventListener("click", Total_ST_Function);
    document.getElementById("Total_SS_marks").addEventListener("click", Total_SS_Function);
    document.getElementById("Total_HE_marks").addEventListener("click", Total_HE_Function);
    document.getElementById("Total_Hindi_marks").addEventListener("click", Total_Hindi_Function);
    document.getElementById("Grand_Total").addEventListener("click",Grand_Total);
    document.getElementById("Percentage").addEventListener("click",Percentage);
    document.getElementById("link").addEventListener("click",flogout);
    document.getElementById("identifier").addEventListener("load",onAuthStateChanged);

      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log("User that is logged in is",uid);
          console.log(user.email);
          document.getElementById("para").innerHTML="Welcome"+" "+user.email;
          // ...
        } else {
          // User is signed out
          // ...
          //console.log("Sorry you have not logged in");
          document.getElementById("submit").disabled = true;
          window.location.href = "Login.html";
        }
      });

      function flogout(){
        auth.signOut().then(()=>{
          console.log("User is SignOut");
          window.location.href = "Login.html";
      });
      }

  
  function Clear_Form(){
  
    //clearing the form
    document.getElementById("RollNo").value="";
    document.getElementById("student_name").value="";
    document.getElementById("Int_Eng_marks").value="";
    document.getElementById("Ext_Eng_marks").value="";
    document.getElementById("Total_Eng_marks").value="";
    
    document.getElementById("Int_Gra_marks").value="";
    document.getElementById("Ext_Gra_marks").value="";
    document.getElementById("Total_Gra_marks").value="";
    
    document.getElementById("Int_MIL_marks").value="";
    document.getElementById("Ext_MIL_marks").value="";
    document.getElementById("Total_MIL_marks").value="";
    
    document.getElementById("Int_Mth_marks").value="";
    document.getElementById("Ext_Mth_marks").value="";
    document.getElementById("Total_Mth_marks").value="";
    
    document.getElementById("Int_ST_marks").value="";
    document.getElementById("Ext_ST_marks").value="";
    document.getElementById("Total_ST_marks").value="";
    
    document.getElementById("Int_SS_marks").value="";
    document.getElementById("Ext_SS_marks").value="";
    document.getElementById("Total_SS_marks").value="";
    
    document.getElementById("Int_HE_marks").value="";
    document.getElementById("Ext_HE_marks").value="";
    document.getElementById("Total_HE_marks").value="";
    
    
    document.getElementById("Int_Hindi_marks").value="";
    document.getElementById("Ext_Hindi_marks").value="";
    document.getElementById("Total_Hindi_marks").value="";
    
    document.getElementById("M_Sc_Grade").value="";
    document.getElementById("EVS_Grade").value="";
    document.getElementById("GK_Comp_Grade").value="";
    document.getElementById("CE_Grade").value="";
    document.getElementById("PT_Grade").value="";
    document.getElementById("WE_Grade").value="";
    document.getElementById("Working_Days").value="";
    document.getElementById("Attendence").value="";
    document.getElementById("Grand_Total").value="";
    document.getElementById("Percentage").value="";
    document.getElementById("Result").value="";
       
  }


  function Filling_roster(){
  
    var roll=parseInt(document.getElementById("RollNo").value);
    var name=document.getElementById("student_name").value;
    var s1=document.getElementById("Total_Eng_marks").value;
    var s2=document.getElementById("Total_Gra_marks").value;
    var s3=document.getElementById("Total_MIL_marks").value;
    var s4=document.getElementById("Total_Mth_marks").value;
    var s5=document.getElementById("Total_ST_marks").value;
    var s6=document.getElementById("Total_SS_marks").value;
    var s7=document.getElementById("Total_HE_marks").value;
    var s8=document.getElementById("Total_Hindi_marks").value;
    //Grade Subjects
    var s9=document.getElementById("M_Sc_Grade").value;
    var s10=document.getElementById("EVS_Grade").value;
    var s11=document.getElementById("GK_Comp_Grade").value;
    var s12=document.getElementById("CE_Grade").value;
    var s13=document.getElementById("PT_Grade").value;
    var s14=document.getElementById("WE_Grade").value;
    var s15=document.getElementById("Working_Days").value;
    var s16=document.getElementById("Attendence").value;
    var s17=document.getElementById("Grand_Total").value;
    var s18=document.getElementById("Percentage").value;
    var s19=document.getElementById("Result").value;
    
    
// Denotes total number of rows
  var rowIdx = 1;
    if(roll<=0 || s1=="" || s2=="" || s3=="" || s4=="" || s5=="" || s6=="" || s7=="" || s8=="" || name=="" || s9=="" || s10=="" || s11=="" || s12=="" || s13=="" || s14=="" || s15=="" || s16=="" || s17=="" || s18=="" || s19==""){
        confirm("Some Fields are missing Please check again");

    }
    else{
      Transfer_to_firebase();
      const Subject_marks = [roll,name,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19];
      var table = document.getElementById("myTable");
      var row = table.insertRow(rowIdx);
      var count=0;
      for(let i=0;i<21;i++){
          var cell1 = row.insertCell(i);
          cell1.innerHTML = Subject_marks[count];
          count++;
      }
      rowIdx++;     
      Clear_Form();
    }

}


  

  function Transfer_to_firebase() {
  
    var c = document.getElementById("class").value;
    console.log("Class_"+c);
    var section = document.getElementById("section").value;
    console.log("Section_"+section);
    var term = document.getElementById("Term").value;
    console.log(term);

    var rollno=document.getElementById("RollNo").value;
    var name=document.getElementById("student_name").value;
    
    var Int_Eng=document.getElementById("Int_Eng_marks").value;
    var Ext_Eng=document.getElementById("Ext_Eng_marks").value;
    var Total_Eng=document.getElementById("Total_Eng_marks").value;
    
    var Int_Gra=document.getElementById("Int_Gra_marks").value;
    var Ext_Gra=document.getElementById("Ext_Gra_marks").value;
    var Total_Gra=document.getElementById("Total_Gra_marks").value;
    
    var Int_MIL=document.getElementById("Int_MIL_marks").value;
    var Ext_MIL=document.getElementById("Ext_MIL_marks").value;
    var Total_MIL=document.getElementById("Total_MIL_marks").value;
    
    var Int_Mth=document.getElementById("Int_Mth_marks").value;
    var Ext_Mth=document.getElementById("Ext_Mth_marks").value;
    var Total_Mth=document.getElementById("Total_Mth_marks").value;
    
    var Int_ST=document.getElementById("Int_ST_marks").value;
    var Ext_ST=document.getElementById("Ext_ST_marks").value;
    var Total_ST=document.getElementById("Total_ST_marks").value;
    
    var Int_SS=document.getElementById("Int_SS_marks").value;
    var Ext_SS=document.getElementById("Ext_SS_marks").value;
    var Total_SS=document.getElementById("Total_SS_marks").value;
    
    var Int_HE=document.getElementById("Int_HE_marks").value;
    var Ext_HE=document.getElementById("Ext_HE_marks").value;
    var Total_HE=document.getElementById("Total_HE_marks").value;


    var Int_Hindi=document.getElementById("Int_Hindi_marks").value;
    var Ext_Hindi=document.getElementById("Ext_Hindi_marks").value;
    var Total_Hindi=document.getElementById("Total_Hindi_marks").value;
    //Grade Marks
    var Msc=document.getElementById("M_Sc_Grade").value;
    var Evs=document.getElementById("EVS_Grade").value;
    var Gk_Comp=document.getElementById("GK_Comp_Grade").value;
    var CE=document.getElementById("CE_Grade").value;
    var PT=document.getElementById("PT_Grade").value;
    var WE=document.getElementById("WE_Grade").value;
    var WD=document.getElementById("Working_Days").value;
    var Attd=document.getElementById("Attendence").value;
    var Gt=document.getElementById("Grand_Total").value;
    var pc=document.getElementById("Percentage").value;
    var Result=document.getElementById("Result").value;

    


      (async () => {
        const docRef=doc(db, "Class_"+c,"Section_"+section);
      try {
        const fRef = await setDoc(doc(docRef,term,rollno),{
          RollNo:parseInt(rollno),
          Name:name.toUpperCase(),
          Msc_Grade: parseInt(Msc),
          Evs_Grade: parseInt(Evs),
          GK_Comp_Grade: parseInt(Gk_Comp),
          Creative_Expression: parseInt(CE),
          Physical_Training: parseInt(PT),
          work_Expression: parseInt(WE),
          Working_Days: parseInt(WD),
          Attendence:parseInt(Attd),
          Grand_Total:parseInt(Gt),
          Percentage:parseFloat(pc).toFixed(2),
          Final_Result:Result.toUpperCase(),
          Subjects :{
    
            English : {
              Int_Eng_Marks: parseInt(Int_Eng),
              Ext_Eng_Marks: parseInt(Ext_Eng),
              Total_Eng_Marks: parseInt(Total_Eng)
            },
    
            Grammar : {
              Int_Gra_Marks: parseInt(Int_Gra),
              Ext_Gra_Marks: parseInt(Ext_Gra),
              Total_Gra_Marks: parseInt(Total_Gra)
            },
    
            MIL : {
              Int_MIL_Marks: parseInt(Int_MIL),
              Ext_MIL_Marks: parseInt(Ext_MIL),
              Total_MIL_Marks: parseInt(Total_MIL)
            },
            Maths : {
              Int_Maths_Marks: parseInt(Int_Mth),
              Ext_Maths_Marks: parseInt(Ext_Mth),
              Total_Maths_Marks: parseInt(Total_Mth)
            },
            Science : {
              Int_Science_Marks: parseInt(Int_ST),
              Ext_Science_Marks: parseInt(Ext_ST),
              Total_Science_Marks: parseInt(Total_ST)
            },
    
            Social_studies: {
              Int_SocialStudies_Marks: parseInt(Int_SS),
              Ext_SocialStudies_Marks: parseInt(Ext_SS),
              Total_SocialStudies_Marks: parseInt(Total_SS)
            },
            Health : {
              Int_Health_Marks: parseInt(Int_HE),
              Ext_Health_Marks: parseInt(Ext_HE),
              Total_Health_Marks: parseInt(Total_HE)
            },
            Hindi : {
              Int_Hindi_Marks: parseInt(Int_Hindi),
              Ext_Hindi_Marks: parseInt(Ext_Hindi),
              Total_Hindi_Marks: parseInt(Total_Hindi)
            }
            
          }
    
          });
        console.log("Document Added Successfully");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })();
    
 
}

function Total_Eng_Function() {
  var p1=parseInt(document.getElementById("Int_Eng_marks").value);
  var p2=parseInt(document.getElementById("Ext_Eng_marks").value);
  document.getElementById("Total_Eng_marks").value = p1+p2;
  }
  
  function Total_Gra_Function() {
  var p1=parseInt(document.getElementById("Int_Gra_marks").value);
  var p2=parseInt(document.getElementById("Ext_Gra_marks").value);
  document.getElementById("Total_Gra_marks").value = p1+p2;
  }
  
  function Total_MIL_Function() {
  var p1=parseInt(document.getElementById("Int_MIL_marks").value);
  var p2=parseInt(document.getElementById("Ext_MIL_marks").value);
  document.getElementById("Total_MIL_marks").value = p1+p2;
  }
  
  function Total_Mth_Function() {
  var p1=parseInt(document.getElementById("Int_Mth_marks").value);
  var p2=parseInt(document.getElementById("Ext_Mth_marks").value);
  document.getElementById("Total_Mth_marks").value = p1+p2;
  }
  
  function Total_ST_Function() {
  var p1=parseInt(document.getElementById("Int_ST_marks").value);
  var p2=parseInt(document.getElementById("Ext_ST_marks").value);
  document.getElementById("Total_ST_marks").value = p1+p2;
  }
  
  function Total_SS_Function() {
  var p1=parseInt(document.getElementById("Int_SS_marks").value);
  var p2=parseInt(document.getElementById("Ext_SS_marks").value);
  document.getElementById("Total_SS_marks").value = p1+p2;
  }
  
  function Total_HE_Function() {
  var p1=parseInt(document.getElementById("Int_HE_marks").value);
  var p2=parseInt(document.getElementById("Ext_HE_marks").value);
  document.getElementById("Total_HE_marks").value = p1+p2;
  }
  
  function Total_Hindi_Function() {
  var p1=parseInt(document.getElementById("Int_Hindi_marks").value);
  var p2=parseInt(document.getElementById("Ext_Hindi_marks").value);
  document.getElementById("Total_Hindi_marks").value = p1+p2;
  }
  function Grand_Total(){
  var s1,s2,s3,s4,s5,s6,s7,s8;
  s1=parseInt(document.getElementById("Total_Eng_marks").value);
  s2=parseInt(document.getElementById("Total_Gra_marks").value);
  s3=parseInt(document.getElementById("Total_MIL_marks").value);
  s4=parseInt(document.getElementById("Total_Mth_marks").value);
  s5=parseInt(document.getElementById("Total_ST_marks").value);
  s6=parseInt(document.getElementById("Total_SS_marks").value);
  s7=parseInt(document.getElementById("Total_HE_marks").value);
  s8=parseInt(document.getElementById("Total_Hindi_marks").value);
  document.getElementById("Grand_Total").value=s1+s2+s3+s4+s5+s6+s7+s8;
  }
  function Percentage(){
      var p=parseInt(document.getElementById("Grand_Total").value);
      document.getElementById("Percentage").value=(p/8);
  }



 







    
 
