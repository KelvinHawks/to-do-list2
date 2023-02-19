const inputItems = document.querySelector('.input-items')

const form = document.querySelector('.form')

const button = document.querySelectorAll('.btn')

const deleteItemBtn = document.querySelectorAll('.btn')

const itemValue = document.querySelector('.items-container')

const itemList = document.querySelector('.list-add-rem-items')

const addBtn = document.querySelector('.add-btn')

const clrBtn = document.querySelector('.clrbtn')

clrBtn.style.backgroundColor = 'red'
clrBtn.style.border = 'none'

// style 
inputItems.style.width = '300px'

addBtn.style.padding = '7px'
addBtn.style.width = '200px'
addBtn.style.backgroundColor = 'forestGreen'
addBtn.style.border = 'none'
addBtn.style.borderRadius = '7px'

itemValue.style.listStyle = 'none'


button.forEach((btns)=>{
        if(btns.classList.contains('add-btn')){
            addToList(btns)
        }else{
            btns.addEventListener('click', ()=>{
                itemList.innerHTML = ''
            })
        }
    }
)

function addToList(btn){
    btn.addEventListener('click', addItemsToList)
}

//delete individual item

// deleteItemBtn.addEventListener('click', ()=>{

// })

//add items to list function------

function addItemsToList(){
    const itemValue = inputItems.value
    if(itemValue){
         const element = document.createElement('Article')
        element.classList.add('items-container')
       
        //console.log(element);
       

        element.innerHTML = ` <div class="items-container" style="display: block; text-align: center; align-items: center; justify-content: space-between; width: 200px;">
                    <ul class="items-list" style="display: flex;">
                        ${itemValue}
                        <button class="delete-item">del</button>
                        <button class="edit-item">edit</button>
                    </ul>
                </div>`

        //alue.appendChild(element) 
        itemList.appendChild(element) 
        
        const deleteIndividualItemBtn = document.querySelectorAll('.delete-item')
        deleteIndividualItemBtn.forEach((btns)=>{
            btns.addEventListener('click', deleteIndividualItem)
        })

        const editIndividualItemBtn = document.querySelectorAll('.edit-item')
        editIndividualItemBtn.forEach((editbtn)=>{
            editbtn.addEventListener('click', editIndividualItem)})

        //form.reset()
    }else{
        alert('list cannnot be empty')
    }
   
//delete individual items

}

function deleteIndividualItem(e){
    const target = e.currentTarget.parentElement.parentElement.parentElement

    itemList.removeChild(target)
}

//edit button

function editIndividualItem(e){
    const atTarget = e.currentTarget.parentElement
   
    
    console.log(atTarget);
   
    
}