const Myarray = 
        [
            {
                name: 'Example task 1',
                date: '2022-12-22'
            },
            {
                name: 'Example tank 2',
                date: '2025-03-17'
            }
        ];
        function AddToArray()
        {
            const input = document.querySelector('.js-name-input');
            const dateinput = document.querySelector('.js-date-input');
            const inputError = document.querySelector('.js-input-error-message');
            const inputDateError = document.querySelector('.js-input-date-error-message');
            const name = input.value;
            const date = dateinput.value;
            if(name && date)
            {
                Myarray.push({
                    name: name,
                    date: date
                });
                input.value ='';
                dateinput.value ='';
                renderTodoList()
                input.classList.remove('error');
                dateinput.classList.remove('error');
                inputError.innerHTML = '';
                inputDateError.innerHTML = '';

            }else if(name && !date)
            {
                input.value ='';
                dateinput.value ='';
                renderTodoList()
                input.classList.remove('error');
                dateinput.classList.add('error');
                inputDateError.classList.add('errorMessage');
                inputDateError.innerHTML = 'Date is empty';
                inputError.innerHTML = '';
            }else if(!name && date)
            {

                input.value ='';
                dateinput.value ='';
                renderTodoList()
                dateinput.classList.remove('error');
                input.classList.add('error');
                inputError.classList.add('errorMessage');
                inputError.innerHTML = 'Name is empty';
                inputDateError.innerHTML = '';

            }else
            {
                input.classList.add('error');
                inputError.classList.add('errorMessage')
                inputError.innerHTML = 'Name is emptys'

                dateinput.classList.add('error');
                inputDateError.classList.add('errorMessage')
                inputDateError.innerHTML = 'Date is emptys'
            }
        }

        
        function EnterButton(event)
        {
            if(event.key === 'Enter')
            {
                AddToArray()
            }
        }

        function renderTodoList()
        {
            let TodoListHTML = '';
            for (let i = 0; i < Myarray.length; i++) 
            {
                const elementObj = Myarray[i];
                // const name = elementObj.name;
                // const date = elementObj.date; //Shortcut below for to line 
                const  { name , date} = elementObj;

                const html = `
                <div>${name}</div>
                <div>${date}</div>
                <button onclick="Myarray.splice(${i},1);
                renderTodoList()"
                class = "delete-todo-button"
                >Delete</button>
                `;
                TodoListHTML += html;
                
            }
            
            document.querySelector('.todo-list').innerHTML = TodoListHTML;
        }

        renderTodoList()


