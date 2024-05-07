let resume=
    
{
    
    "Name":"lokesh m",
    "father name":"k.murugan",
    "email":"lokeshshark97@mail.com",
    "address":{
        "no":219,
        "street":"bharathiyar street",
        "city":"ponneri",
        "pin": 601204,
        "mobile":"9786874921"
    },
    
    "qualification":"BBA",
    "institution":"university of madras",
    "Domain":"Full stack development",

    
    "Experience":"logiware logistics solutions",
    "position":"floor supervisor",
    "year":"2019-2022",
    
    
    skills :[
        "master in excel",
        "begginner in ms word",
       "begginner in java script"],};

    
    
     console.log(resume);


     //Iterate using for loop


     for (let key in resume) {
        if (resume.hasOwnProperty(key)) {
          console.log(key + ': ' + resume[key]);
        }
      }


      //Iterate using for in loop

      function printResume(resumeObject) {
        for (let key in resumeObject) {
          if (resumeObject.hasOwnProperty(key)) {
            if (typeof resumeObject[key] === 'object') {
              console.log(key + ':');
              printResume(resumeObject[key]); 
            } else {
              console.log(key + ': ' + resumeObject[key]);
            }
          }
        }
      }
      
    
      console.log('Resume:');
      printResume(resume);

      //Iterate using for off loop
      for (let [key, value] of Object.entries(resume)) {
        if (value instanceof Object) {
          console.log(key + ':');
          for (let [subKey, subValue] of Object.entries(value)) {
            console.log(`  ${subKey}: ${subValue}`);
          }
        } else {
          console.log(`${key}: ${value}`);
        }
      }

      //Iterate using forEach loop

      Object.keys(resume).forEach(key => {
        console.log(key, ':', resume[key]);
      });