import React from "react";
import NavbarSection from "./Navbar-section";

export default function CartProduct(){
    let number=[9,6,3,425,6,8,6,1,2]
    for(let i=0; i<number.length; i++){
        for(let index = 0; index<number.length; index++){
            if(number[i]<number[index]){
            let penampung = number[index]
            number[index]=number[i]
            number[i] = penampung
            }
        }
    }
    console.log(number);
    //result = number=[1,2,3,6,6,6,8,9,425]
    let angka=[2,4,1,3,4,3,1,3]
    for(let i=0;i<angka.length;i++){
        // console.log(`${i} adalah :  ${angka[i]}`);
    // me looping array angka dan menyimpannya di variable i
        for(let index=0; index<angka.length;index++){
            console.log(`${index} adalah :  ${angka[index]}`);
            console.log(angka[index]);
        //me looping angka untuk kedua kalinya dan menyimpannya di variable index
            if(angka[i]<angka[index]){
            //set kondisi dimana angka dengan index [i] lebih kecil dari angka dengan index [index]
                let container= angka[index]
                angka[index] = angka[i]
                angka[i] = container
            }
        }
    }
    console.log(angka);



    let num1=[1,9,5,7,2,5,23423,45,12,4,6,7,2]
    for(let i=0; i<num1.length; i++){
        for(let index=0; index<num1.length; index++){
            if(num1[i]<num1[index]){
                let container= num1[i]
                num1[i]=num1[index]
                num1[index]=container
            }
        }
    }
    console.log(num1);

    return(
        <div>
            <NavbarSection></NavbarSection>
            <div>
                <h1>Checkout</h1>
                <div>
                    <p>Adress</p>
                    <p>Shipping</p>
                    <p>Payment</p>
                </div>
                <h3>Shipping Information</h3>
                <form>
                    <div>
                        <input placeholder="First Name"/>
                        <input placeholder="Last Name"/>
                    </div>
                    <input placeholder="Address"/>
                    <input placeholder="Apartment, Suit, etc (optional)"/>
                    <input placeholder="City"/>
                    <div>
                        <select>
                            <option>Country</option>
                        </select>
                        <select>
                            <option>City</option>
                        </select>
                        <input placeholder="Zipcode"/>
                    </div>
                    <input placeholder="Optional"/>
                    <div>
                        <input type='checkbox'/>
                        <span>Save contact information</span>
                    </div>
                    <button>Continue to Shipping</button>
                </form>
            </div>
            <div>
                <p>Your cart</p>
                <div>
                    <img src="/images/images-project/jacket.png" alt=""/>
                    <div>
                        <h1>Men’s winter jacket</h1>
                        <p>Size L</p>
                        <p>Quantity 1</p>
                        <div>
                            <p className="price">$99</p>
                            <p>Remove</p>
                        </div>
                    </div>
                    <p className="border-bottom"></p>
                </div>
                <div>
                    <img src="/images/images-project/jacket.png" alt=""/>
                    <div>
                        <h1>Men’s winter jacket</h1>
                        <p>Size L</p>
                        <p>Quantity 1</p>
                        <div>
                            <p className="price">$99</p>
                            <p>Remove</p>
                        </div>
                    </div>
                    <p className="border-bottom"></p>
                </div>
                
                <input />
                <div>
                    <div></div>
                    <div></div>
                    <p className="border-bottom"></p>
                    <div></div>
                </div>
            </div>
            
        </div>
    )
}