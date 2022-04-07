//REDUX
// import {createStore} from 'redux'

//di redux secara simple terdiri dari 4 bagian. 

// 1.bagian store => GLOBAL STATE
//berfungsi untuk menyimpan state secara global

//2.ACTION => adalah function yang hanya memberi tahukan sebuah tindakan tanpa melakukannya
const tambah=()=>{
  return{
    type: 'INCREMENT'
  }
}

const kurang=()=>{
  return{
    type: 'DECREMENT'
  }
}

//3.REDUCER => adalah function yang berfungsi melakukan pengecekan dan memodif 
//atau mengupdate data sesuai dengan maksud dari ACTION
const reducer=(state=0,action)=>{
  switch(action.type){
    case 'INCREMENT':
      return state+1
    case 'DECREMENT':
      return state-1
  }
}
let store= createStore(reducer)
store.subscribe(()=>console.log(store.getState()));

//4.DISPATCH => berfungsi untuk mengirimkan 
//data/function dari bagian action ke store atau global state
store.dispatch(tambah())
store.dispatch(tambah())
store.dispatch(tambah())
store.dispatch(kurang())
store.dispatch(kurang())
store.dispatch(kurang())


//alur dari redux
    //DISPATCH adalah suatu function yang berfungsi untuk menambahkan data/menyimpan data ke global state,
    //data yang akan disimpan adalah callback dari ACTION, ACTION sendiri adalah function yang mengembalikan 
    //nilai yang berupa objek yang pada dasarnya hanya menyimpan nama dari sebuah action tanpa melakukan action 
    //itu sendiri. apabila ACTION sudah dipanggil atau di callback oleh DISPATCH maka secara otomatis REDUCER 
    //akan men cek ACTION apa yang akan dijalankan, di reducer inilah terjadinya modifikasi data yang sesuai 
    //dengan apa yang dikehendaki oleh ACTION
//
    //DISPATCH(HAUS())=> terlebih dahulu menyelesaikan function callback lalu akan menyimpan data dari callback ke global state
    //ACTION= HAUS
    //REDUCER= tuangkan air di gelas lalu diminum

    [{
      ozan:true,
      alfi:flase,
      fadhil:12
      },
      {
      ozan:false,
      alfi:true,
      fadhil:3
    }]