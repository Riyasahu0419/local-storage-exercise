document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    
    var username = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    
    localStorage.setItem('name',username);
    localStorage.setItem('age',age);


    alert('Data stored ')

    })
    document.getElementById('retrivedata').addEventListener('click',function(){

        var storedname = localStorage.getItem('name')
        var storedage = localStorage.getItem('age')

        document.getElementById('display').innerHTML =`
        <table>
            <tr>
                <th>name</th>
                <th>age</th>

            </tr>
            
            <tr>
                <td>${storedname}</td>
                <td>${storedage}</td>
            </tr>

            </table>


        `;

        
    })