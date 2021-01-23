import type_A_img from '../img/furn/bench_typ_a.png'

let  _state = {
    calcWood: {
            value: '',
            price:['0.00','0.00','0.00','0.00','0.00'],
            size:['100*25*6000','150*25*6000','50*50*6000','50*100*6000','100*100*6000'],
            cauntIn:[66,44,66,33,16]
        },
    furniture: {
        bench: {
            type_A: {
                id:1,
                name:'Скамейка тип А',
                totalCost:'',
                img: type_A_img,
                cuts:['50*50*200','100*25*300','100*25*500','50*50*500','100*25*1500'],
                cauntCuts:[2,3,4,2,2],
            }
        }

    }
    }
    
export default _state 
