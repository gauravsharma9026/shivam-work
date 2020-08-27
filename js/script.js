var data = [
    {
    "id": 1,
    "name":"rirani",
    "skills":"Romin",
    "project":"Irani",
    "hcm":"Romin Irani"
    },
    {
    "id": 2,
    "name":"rirani",
    "skills":"Romin",
    "project":"Irani",
    "hcm":"Romin Irani"
    },
    {
    "id": 3,
    "name":"rirani",
    "skills":"Romin",
    "project":"Irani",
    "hcm":"Romin Irani"
    },
    {
        "id": 4,
        "name":"rirani",
        "skills":"Romin",
        "project":"Irani",
        "hcm":"Romin Irani"
    },
    {
            "id": 5,
            "name":"rirani",
            "skills":"Romin",
            "project":"Irani",
            "hcm":"Romin Irani"
    },
    {
        "id": 6,
        "name":"rirani",
        "skills":"Romin",
        "project":"Irani",
        "hcm":"Romin Irani"
},
{
    "id": 7,
    "name":"rirani",
    "skills":"Romin",
    "project":"Irani",
    "hcm":"Romin Irani"
},
{
    "id": 8,
    "name":"rirani",
    "skills":"Romin",
    "project":"Irani",
    "hcm":"Romin Irani"
},
{
    "id": 9,
    "name":"rirani",
    "skills":"Romin",
    "project":"Irani",
    "hcm":"Romin Irani"
},
{
    "id": 10,
    "name":"rirani",
    "skills":"Romin",
    "project":"Irani",
    "hcm":"Romin Irani"
}
    ];

    var callback = function(){
        var mainGrid = document.querySelector(".gridmain");
        var table = document.querySelector(".table-class");
        mainGrid.innerHTML= '';
        table.innerHTML= '<tr>\
        <th>Name</th>\
        <th>ID</th>\
        <th>Skills</th>\
        <th>Projects</th>\
        <th>HCM</th>\
        <th>Action</th>\
    </tr>';
        data.forEach(function(val){
            var html = '<div id="inner-'+val.id+'" class="innergrid">\
            <div id="inner-'+val.id+'" class="innergridwhite">\
                <div class="crossicon" onclick="deletevalue(this)"><img src="cross.svg"></div>\
                <div class="usericon" ><img src="user.svg"></div>\
                <div id="name" class="namelabel">Name:'+val.name+'</div>\
                <div id="empoyeeid" class="namelabel">ID:'+val.id+'</div>\
                <div id="skillsGrid-'+val.id+'" class="namelabel">Skills:'+val.skills+'</div>\
                <div class="namelabel">Project:'+val.project+'</div>\
                <div class="namelabel">HCM:'+val.hcm+'</div>\
                <div id="'+val.id+'" class="edit">\
                    <a id="edit" onclick="edit(this)" href="#">Edit</a>\
                </div>\
            </div>\
        </div>';
        var tableHtml = '<tr id="row-'+val.id+'">\
        <td>'
        +val.name+
        '</td>\
        <td>'+val.id+'</td>\
        <td id="skillslist-'+val.id+'">'+val.skills+'</td>\
        <td>'+val.project+'</td>\
        <td>'+val.hcm+'</td>\
        <td id="'+val.id+'"><img  onclick="editList(this)"  src="edit.svg" ><img onclick="deletevalue(this)" src="cross.svg"></td>\
    </tr>';
            mainGrid.innerHTML += html;
            table.innerHTML += tableHtml;        
        });

       /* document.getElementById("listing").addEventListener("click", function(e) {
            // Find the .ch, starting with the element the click originated in
            var ch = e.target;
            while (ch && !ch.className.match(/\bch\b/)) {
                ch = ch.parentNode;
            }
            if (ch) {
                ch.parentNode.removeChild(ch);
            }
        }, false);*/
       
      };
      
      if (
          document.readyState === "complete" ||
          (document.readyState !== "loading" && !document.documentElement.doScroll)
      ) {
        callback();
      } else {
        document.addEventListener("DOMContentLoaded", callback);
      }