import React from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import { ROUTES } from '../../routes/RouterConfig'
import ItemCard from '../../components/ItemCard/ItemCard'
import ic1 from "../../assets/images/ChartBar.svg"
import ic3 from "../../assets/images/CalendarBlank.svg"
import ic2 from "../../assets/images/DropHalfBottom.svg"
import ic4 from "../../assets/images/Tree.svg"
import ic5 from "../../assets/images/Snowflake.svg"
import ic6 from "../../assets/images/BeerBottle.svg"


import Flask from "../../assets/images/Flask.svg"
import GearSix from "../../assets/images/GearSix.svg"
import TestTube from "../../assets/images/TestTube.svg"
import Thermometer from "../../assets/images/Thermometer.svg"
import ThumbsDown from "../../assets/images/ThumbsDown.svg"

import Output from "../../assets/images/outComp.svg"
import output2 from "../../assets/images/OutCompMobile.svg"


import Hearbeat from "../../assets/images/Heartbeat.svg"
import Sparkle from "../../assets/images/SparkleStar.svg"
import Wind from "../../assets/images/Wind.svg"
import Leaf from "../../assets/images/Leaf.svg"
import Subtract from "../../assets/images/Subtract.svg"



import Hand from "../../assets/images/Hand.png"
import Hand2 from "../../assets/images/Group 6362.svg"




import Banner1 from '../../components/Banner/Banner1'
import Accordian from '../../components/Accordian/Accordian'
import Faq from '../../components/Faq/Faq'
import ButtonOutline from '../../components/Button/ButtonOutline'
import ButtonGradient from '../../components/Button/ButtonGradient'
import Checkout from '../../components/Checkout/Checkout'
import Banner2 from '../../components/Banner/Banner2'
import { productsArray } from '../../data/products'

// products
// import item from './../../assets/images/item.png'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import { useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const Home = ({ cart, setCart, onOpen, scrollToProducts, productRef, cartCount, addProduct }) => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  const handleProduct = (e, product) => {
    e.preventDefault();



    let cartData = cart?.find(item => item.id == product.id);



    if (cartData) {
      setCart(prev => {
        const newState = prev?.map(data => {
          if (data.id == cartData.id) {
            return { ...data, count: data.count + 1 }
          }
          return data
        }
        )

        return newState;
      })
    } else {
      setCart(prev => [...prev, {
        id: product.id,
        name: product.name,
        count: 1,
        quantity: product.quantity,
        price: product.price,
        image: product.image
      }])
    }

  }


  const addQuantity = (id) => {
    console.log(id)

    setCart(prev => {
      const newState = prev?.map(data => {
        if (data.id == id) {
          return { ...data, count: data.count + 1 }
        }
        return data
      }
      )

      return newState;
    })

  }

  const removeQuantity = (id) => {


    setCart(prev => {

      if (prev.find(data => data.id == id && data.count == 1)) {
        const newState = prev?.filter(data => {
          if (data.id == id) {
            if (data.count == 1) {
              return
            }
          }
          return data
        })

        return newState
      } else {
        const newState = prev?.map(data => {
          if (data.id == id) {
            return { ...data, count: data.count - 1 }
          }
          return data
        })

        return newState
      }


    })
  }

  const [showBreak, setShowBreak] = useState(true)


  const mql = window.matchMedia('(max-width: 600px)');

  useEffect(() => {
    let mobileView = mql.matches;

    if (mobileView) {
      setShowBreak(false)
    } else {
      setShowBreak(true)
    }
  }, [mql])



  return (
    <div className='Home'>

      {/* <Navbar onOpen={onOpen} scrollToProducts={scrollToProducts}/>

      <Checkout isOpen={isOpen} onOpen={onOpen} onClose={onClose}/> */}


      <Banner scrollToProducts={scrollToProducts} showBreak={showBreak} />

      {/* SECTION 1*/}

      <section className='bg-[#fff] md:py-[120px] py-[40px]'>

        <div className='container  mx-auto'>
          <div className=''>
            <h2 className='md:text-Medium+/Title/xLarge text-Small/Title/xLarge text-Neutral80'>Straightforward & Transparent Process</h2>
            <p className='md:text-Medium+/Paragraph/Large text-Small/Paragraph/Large text-Neutral70 mt-[8px]'>We love sharing how we produce our products,
              {
                showBreak ? <br /> : null
              }  you exactly know what you are getting into your kitchen. </p>

          </div>



          <div className="card-box grid sm:grid-cols-3 grid-cols-1 mt-[32px] md:mt-[64px]">

            <div className="col-span-1 card bg-white sm:py-6 py-3 flex md:flex-col flex-row  ">

              <div className="flex items-center md:w-[100%] w-auto">
                <div className="rounded-full min-h-[56px] min-w-[56px] relative bg-Primary60">
                  <img src={ic4} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[25px]" alt="" />
                </div>
                <div className='h-[1px] sm:block hidden bg-[#D0CECE] w-full'></div>
              </div>
              <div className='ml-[16px] md:ml-[0px]'>
                <h6 className='md:text-Medium+/Title/Small text-Small/Title/Small text-Neutral70 mt-[16px]'>Obtaining seeds</h6>
                <p className='md:text-Medium+/Paragraph/Medium text-Small/Paragraph/Medium text-black mt-[8px]'>Dried seeds like groundnut, mustard,<br /> coconut are obtained from the farm.</p>
                {/* <div className='w-[1px] h-full min-h-[100px] mx-4 mt-2 sm:hidden block bg-[#D0CECE] w-full absolute hidden md:block md:relative'></div> */}
              </div>
            </div>

            <div className="col-span-1 card flex bg-white sm:py-6 py-3 mt-[8px] md:mt-[0px] md:flex-col flex-row">

              <div className="flex items-center w-[100%] md:w-[100%] w-auto">
                <div className="rounded-full relative min-h-[56px] min-w-[56px] bg-Blue60">
                  <img src={ic5} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" alt="" />
                </div>
                <div className='h-[1px] sm:block hidden bg-[#D0CECE] w-full'></div>
              </div>

              <div className='ml-[16px] md:ml-[0px]'>

                <h6 className='md:text-Medium+/Title/Small text-Small/Title/Small text-Neutral70 mt-[16px]'>Cold Pressing</h6>
                <p className='md:text-Medium+/Paragraph/Medium text-Small/Paragraph/Medium text-black mt-[8px]'>Seeds are poured and crushed in a wooden <br /> press to obtain pure oil.</p>
              </div>
              <div className='w-[1px] h-full min-h-[100px] mx-4 mt-2 sm:hidden absolute hidden block bg-[#D0CECE] w-full'></div>
            </div>


            <div className="col-span-1 card flex bg-white sm:py-6 py-3 mt-[8px]  md:mt-[0px] md:flex-col flex-row">

              <div className="flex items-center md:w-[100%] w-auto ">
                <div className="rounded-full min-h-[56px] min-w-[56px] relative bg-Yellow70">
                  <img src={ic6} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" alt="" />
                </div>
              </div>

              <div className='ml-[16px] md:ml-[0px]'>

                <h6 className='md:text-Medium+/Title/Small text-Small/Title/Small text-Neutral70 mt-[16px]'>Bottling</h6>
                <p className='md:text-Medium+/Paragraph/Medium text-Small/Paragraph/Medium text-black mt-[8px]'>This oil is collected and is bottled without adding <br /> any chemicals.</p>
              </div>

            </div>


          </div>

        </div>

      </section>

      {/* SECTION 2 */}

      <>
        {/* component */}
        <div className="bg-[#186218] md:py-[120px] py-[40px]">

          <div className="container  mx-auto">
            <div className=" ">
              <h2 className='md:text-Medium+/Title/xLarge text-Small/Title/xLarge text-Neutral10'>Eating healthy starts with choosing <br />
                a healthy oil to cook with.</h2>
              <p className='text-white  mt-[8px] md:text-Medium+/Paragraph/Large text-Small/Paragraph/Large text-Neutral30'>A comparison of refined oil and cold pressed oil would help you understand the key <br />
                differences between the two. Make an informed decision concerning your health.</p>
            </div>

            <div className="md:mt-[64px] mt-[24px]  grid grid-cols-1 gap-[24px] lg:grid-cols-2">
              <div className="bg-Danger10 rounded-[8px] md:px-[24px] md:py-[32px] px-[16px] py-[24px] ">
                <div >
                  <p className="md:text-Medium+/Title/Small text-Small/Title/Small text-Danger70">
                    Refined Oil
                  </p>
                </div>
                <div className="mt-[24px] md:mt-[40px]">
                  <div className="flex items-center ">
                    <img src={GearSix} alt="" />
                    <p
                      className='ml-[9px] text-Neutral60 md:text-Medium+/Label/Medium-Strong text-Small/Label/Medium-Strong'
                    >Process involved</p>
                  </div>
                  <h2 className='text-Neutral70 text-Small/Title/xSmall md:text-Medium+/Title/xSmall mt-[8px]'>Solvent Extraction </h2>
                  <p className='md:text-Medium+/Paragraph/Small text-Small/Paragraph/Small text[#555555] mt-[4px] '>Degumming, Neutralization, Bleaching, Dewaxing, Deodorizing</p>
                </div>

                <hr className='h-[1px] bg-[#DCDCDC] text-[#DCDCDC] mt-[24px]' />

                <div className="item mt-[24px]">
                  <div className="flex items-center ">
                    <img src={Flask} alt="" />
                    <p
                      className='ml-[9px] text-Neutral60 md:text-Medium+/Label/Medium-Strong text-Small/Label/Medium-Strong'
                    >Solvents added</p>
                  </div>
                  <h2 className='text-Neutral70 text-Small/Title/xSmall md:text-Medium+/Title/xSmall mt-[8px]'>NaOH, Fuller’s earth, CH3-CH2-OH (Ethanol) </h2>
                  {/* <p className='text-[#555555]'>Degumming, Neutralization, Bleaching, Dewaxing, Deodorizing</p> */}
                </div>
                <hr className='h-[1px] bg-[#DCDCDC] text-[#DCDCDC] mt-[24px]' />


                <div className="item mt-[24px]">
                  <div className="flex items-center ">
                    <img src={Thermometer} alt="" />
                    <p
                      className='ml-[9px] text-Neutral60 md:text-Medium+/Label/Medium-Strong text-Small/Label/Medium-Strong'
                    >Temperature heated to</p>
                  </div>
                  <h2 className='text-Neutral70 text-Small/Title/xSmall md:text-Medium+/Title/xSmall mt-[8px]'>Upto 300°C  </h2>
                  {/* <p className='text-[#555555]'>Degumming, Neutralization, Bleaching, Dewaxing, Deodorizing</p> */}
                </div>
                <hr className='h-[1px] bg-[#DCDCDC] text-[#DCDCDC] mt-[24px]' />


                <div className="item mt-[24px]">
                  <div className="flex items-center ">
                    <img src={TestTube} alt="" />
                    <p
                      className='ml-[9px] text-Neutral60 md:text-Medium+/Label/Medium-Strong text-Small/Label/Medium-Strong'
                    >Preservatives added</p>
                  </div>
                  <h2
                    className='text-Neutral70 text-Small/Title/xSmall md:text-Medium+/Title/xSmall mt-[8px]'
                  >BHT, BHA and tocopherol </h2>
                  {/* <p className='text-[#555555]'>Degumming, Neutralization, Bleaching, Dewaxing, Deodorizing</p> */}
                </div>

                <button className={`border-[#dcdcdc] bg-Danger60 w-[100%] md:w-auto text-Neutral10 py-[16px] px-[24px] md:text-Medium+/Label/Large-Strong text-Medium+/Label/Medium-Strong gap-[19px] cursor-default rounded-[8px] flex  gap-3 mt-[40px] items-center w-[fit-content] `}>
                  <img src={ThumbsDown} alt="" /> Not recommended for health
                </button>


              </div>
              <div className="bg-Primary10 rounded-[8px] md:px-[24px] md:py-[32px] px-[16px] py-[24px] ">
                <div >
                  <p className="md:text-Medium+/Title/Small text-Small/Title/Small text-Primary60">
                    Cold Pressed Oil
                  </p>
                </div>
                <div className="md:mt-[40px] mt-[24px]">
                  <div className="flex items-center ">
                    <img src={GearSix} alt="" />
                    <p
                      className='ml-[9px] text-Neutral60 md:text-Medium+/Label/Medium-Strong text-Small/Label/Medium-Strong'
                    >Process involved</p>
                  </div>
                  <h2 className='text-Neutral70 text-Small/Title/xSmall md:text-Medium+/Title/xSmall mt-[8px]'>Cold Pressing </h2>
                  <p className='md:text-Medium+/Paragraph/Small text-Small/Paragraph/Small text[#555555] mt-[4px] '>Pressing seeds at low temperature</p>
                </div>

                <hr className='h-[1px] bg-[#DCDCDC] text-[#DCDCDC] mt-[24px]' />

                <div className="item mt-[24px]">
                  <div className="flex items-center ">
                    <img src={Flask} alt="" />
                    <p
                      className='ml-[9px] text-Neutral60 md:text-Medium+/Label/Medium-Strong text-Small/Label/Medium-Strong'
                    >Solvents added</p>
                  </div>
                  <h2 className='text-Neutral70 text-Small/Title/xSmall md:text-Medium+/Title/xSmall mt-[8px]'>H2O (Water) </h2>

                </div>
                <hr className='h-[1px] bg-[#DCDCDC] text-[#DCDCDC] mt-[24px]' />


                <div className="item mt-[24px]">
                  <div className="flex items-center ">
                    <img src={Thermometer} alt="" />
                    <p
                      className='ml-[9px] text-Neutral60 md:text-Medium+/Label/Medium-Strong text-Small/Label/Medium-Strong'
                    >Temperature heated to</p>
                  </div>
                  <h2 className='text-Neutral70 text-Small/Title/xSmall md:text-Medium+/Title/xSmall mt-[8px]'>Upto 35°C </h2>
                  {/* <p className='text-[#555555]'>Degumming, Neutralization, Bleaching, Dewaxing, Deodorizing</p> */}
                </div>
                <hr className='h-[1px] bg-[#DCDCDC] text-[#DCDCDC] mt-[24px]' />


                <div className="item mt-[24px]">
                  <div className="flex items-center ">
                    <img src={TestTube} alt="" />
                    <p
                      className='ml-[9px] text-Neutral60 md:text-Medium+/Label/Medium-Strong text-Small/Label/Medium-Strong'
                    >Preservatives Added</p>
                  </div>
                  <h2
                    className='text-Neutral70 text-Small/Title/xSmall md:text-Medium+/Title/xSmall mt-[8px]'
                  >None</h2>
                  {/* <p className='text-[#555555]'>Degumming, Neutralization, Bleaching, Dewaxing, Deodorizing</p> */}
                </div>

                <button
                  className={`border-[#dcdcdc] highlighted-color text-Neutral10 md:py-[16px] py-[14px] justify-center px-[24px] md:text-Medium+/Label/Large-Strong md:text-Medium+/Label/Medium-Strong w-[100%] md:w-auto text-center gap-[19px]  rounded-[8px] flex  gap-3 mt-[40px] items-center w-[fit-content] grad-btn`}
                  onClick={scrollToProducts}
                >
                  See Available Options
                </button>


              </div>
            </div>
          </div>

        </div>
      </>



      {/* SECTION 3 */}
      <section className='md:py-[120px] py-[64px] bg-Primary10'>

        <div className='container  mx-auto'>
          <div className=''>
            <h2 className='text-Neutral80 md:text-Medium+/Title/xLarge text-Small/Title/xLarge text-Neutral80'>Why is oil refined?</h2>
            <p className='text-Neutral70 md:text-Medium+/Paragraph/Large text-Small/Paragraph/Large mt-[8px] text-Neutral70'>Most large-scale commercial cooking oil refinement will involve solvent <br /> extraction in order to achieve a product with the following properties: </p>

          </div>


          <div className="card-box flex md:mt-[64px] mt-[40px] justify-between gap-4 grid sm:grid-cols-3 grid-cols-1">

            <div className="card bg-Neutral10 md:p-[24px] p-[16px] rounded-[8px] flex flex-col col-span-1">
              <div className="round h-[56px] w-[56px] relative flex align-center rounded-full bg-Secondary60">
                <img src={ic1} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[25px]" alt="" />
              </div>
              <h6 className='md:text-Medium+/Title/Small text-Small/Title/Small text-Neutral70 mt-[16px]'>Increased output</h6>
              <p className='md:text-Medium+/Paragraph/Medium text-Small/Paragraph/Medium text-Neutral70 mt-[8px]'>During solvent extraction, addition of heat & solvents enable achieving a very high output.  </p>
            </div>

            <div className="card bg-Neutral10 md:p-[24px] p-[16px] mt-[16px] md:mt-[0px] rounded-[8px] flex flex-col col-span-1">
              <div className="round h-[56px] w-[56px] relative flex align-center rounded-full bg-Primary70">
                <img src={ic2} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[25px]" alt="" />
              </div>
              <h6 className='md:text-Medium+/Title/Small text-Small/Title/Small text-Neutral70 mt-[16px]'>Removed color & aroma</h6>
              <p className='md:text-Medium+/Paragraph/Medium text-Small/Paragraph/Medium text-Neutral70 mt-[8px]'>By bleaching process, oil looking as clear as water and without any aroma is achieved.</p>
            </div>


            <div className="card bg-Neutral10 md:p-[24px] p-[16px] mt-[16px] md:mt-[0px] rounded-[8px] flex flex-col col-span-1">
              <div className="round h-[56px] w-[56px] relative flex align-center rounded-full bg-Blue70">
                <img src={ic3} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[25px]" alt="" />
              </div>
              <h6 className='md:text-Medium+/Title/Small text-Small/Title/Small text-Neutral70 mt-[16px]'>Increased shelf life</h6>
              <p className='md:text-Medium+/Paragraph/Medium text-Small/Paragraph/Medium text-Neutral70 mt-[8px]'>Addition of preservatives makes sure that it can be kept on the shelf for longer time.</p>
            </div>


          </div>

        </div>

      </section>


      {/* SECTION 4 */}

      <section className='md:py-[120px] py-[64px]'>
        <div className="container  mx-auto">
          <h2 className="text-Small/Title/xLarge md:text-Medium+/Title/xLarge text-Neutral80">You pay for pure quality </h2>
          <p className='mt-[8px] text-Small/Paragraph/Large md:text-Medium+/Paragraph/Large text-Neutral70'>To produce the same volume of oil by cold pressing as opposed to refining, we use more <br /> raw material to maintain the quality of the natural oil. This is a reason why cold pressed <br /> oil can cost more than refined oil.</p>

          <img className='w-[100%] sm:block hidden md:mt-[104px] m-auto' src={Output} alt="" />
          <img className='w-[100%] my-12 sm:hidden mt-[64px] block m-auto' src={output2} alt="" />
        </div>

      </section>


      {/* SECTION 5 */}

      <section className='md:py-[120px] pt-[64px] bg-Primary10'>
        <div className="container  mx-auto">
          <h2 className="text-Small/Title/xLarge md:text-Medium+/Title/xLarge text-Neutral80">Never compromise on the {showBreak ? <br /> : null}
            quality of what you cook with</h2>
          <p className='text-Small/Paragraph/Large md:Ltext-Medium+/Paragraph/Large mt-[8px] text-Neutral70'>Experience purity of the oil in all forms. 100% natural & chemical free.</p>

          <div className='mt-[64px] grid grid-cols-10'>
            <div class=" sm:col-span-6 col-span-10">
              <div class="grid grid-cols-1 gap-[24px] lg:grid-cols-2">
                <div class="overflow-hidden rounded-[8px] bg-Neutral10 p-[24px] md:p-[24px] p-[16px]">
                  <div class="flex flex-col ">
                    <div className="round h-[56px] w-[56px] relative flex align-center rounded-full bg-Secondary60">
                      <img src={Hearbeat} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[25px]" alt="" />
                    </div>
                    <p className="mt-[16px] text-Medium+/Title/Small text-Neutral80">Rich in nutrients</p>
                    <p className='text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium text-Neutral70 mt-[8px]'>All the nutrients from the seeds are intact as no chemical processing is done.</p>
                  </div>
                </div>


                <div class="overflow-hidden rounded-[8px] bg-Neutral10 p-[24px] md:p-[24px] p-[16px]">
                  <div class="flex flex-col ">
                    <div className="round h-[56px] w-[56px] relative flex align-center rounded-full bg-Yellow70">
                      <img src={Wind} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[25px]" alt="" />
                    </div>
                    <p className="mt-[16px] text-Small/Title/Small md:text-Medium+/Title/Small text-Neutral80">Aroma like the seed</p>
                    <p className='text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium text-Neutral70 mt-[8px]'>You get the typical seed aroma, which is a proof of purity.</p>
                  </div>
                </div>


                <div class="overflow-hidden rounded-[8px] bg-Neutral10 p-[24px] md:p-[24px] p-[16px]">
                  <div class="flex flex-col ">
                    <div className="round h-[56px] w-[56px] relative flex align-center rounded-full bg-Blue70">
                      <img src={Sparkle} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[25px]" alt="" />
                    </div>
                    <p className="mt-[16px] text-Small/Title/Small md:text-Medium+/Title/Small text-Neutral80">Retained color </p>
                    <p className='text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium text-Neutral70 mt-[8px]'>Looking at the oil, you can tell the seed the oil was made from.</p>
                  </div>
                </div>


                <div class="overflow-hidden rounded-[8px] bg-Neutral10 p-[24px] md:p-[24px] p-[16px]">
                  <div class="flex flex-col ">
                    <div className="round h-[56px] w-[56px] relative flex align-center rounded-full bg-Primary50">
                      <img src={Leaf} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[25px]" alt="" />
                    </div>
                    <p className="mt-[16px] text-Small/Title/Small md:text-Medium+/Title/Small text-Neutral80">No added preservatives</p>
                    <p className='text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium text-Neutral70 mt-[8px]'>We don’t add any preservatives. What you get is a 100% natural product.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="sm:col-span-4 col-span-10 z-10 flex relative m-auto md:m-0 ">
              <img src={Hand2} alt="" className='bottom-[-120px] z-10 right-[0px] sm:absolute sm:w-[75%] h-[515px] z-10  right ' />
            </div>
          </div>

        </div>
      </section>

      {/* Products */}
      <div className='pt-[120px] pb-[360px] bg-Neutral20' ref={productRef}>
        <div className="container  mx-auto">
          <div className='text-Small/Title/xLarge md:text-Medium+/Title/xLarge text-Neutral80'>Our products</div>
          <div className='text-Small/Paragraph/Large md:text-Medium+/Paragraph/Large text-Neutral70 mt-[8px]'>Explore through our range of cold pressed oils and get started with a healthy lifestyle today.</div>
          <div className="grid md:mt-[104px] mt-[40px] lg:grid-cols-3 grid-cols-1 gap-[24px] ">
            {
              productsArray?.map((i, key) => (
                <div className="col-span-1" key={key}>
                  <ItemCard onClick={(e) => {
                    handleProduct(e, i);
                    addProduct(`${i.name} ${i.quantity} has been added to your bag`)
                  }}
                    addProduct={addProduct}
                    item={i} cart={cart} added={cart.find(item => item.id == i.id) ? true : false} addQuantity={addQuantity} removeQuantity={removeQuantity} />
                </div>
              ))
            }
          </div>

        </div>
      </div>

      {/* <ItemCard/> */}

      <div className=" relative bg-Neutral10">

        <div className="container mx-auto  translate-y-[-50%] ">

          {
            cart && cart.length != 0 ?
              <Banner2 scrollToProducts={scrollToProducts} cartCount={cartCount} onOpen={onOpen} cart={cart} />
              :
              <Banner1 scrollToProducts={scrollToProducts} />
          }
        </div>

      </div>
      <div className='md:py-[120px] pb-[64px]'>
        <div className="container  mx-auto">
          <Faq />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home