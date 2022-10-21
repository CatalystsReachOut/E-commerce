import React from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import { ROUTES } from '../../routes/RouterConfig'
import ItemCard from '../../components/ItemCard/ItemCard'
import ic1 from "../../assets/images/ic1.png"
import ic2 from "../../assets/images/ic2.png"
import ic3 from "../../assets/images/ic3.png"
import ic4 from "../../assets/images/Tree.png"
import ic5 from "../../assets/images/Snowflake.png"
import ic6 from "../../assets/images/BeerBottle.png"



const Home = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className='Home'>

      <Banner />

{/* SECTION ! */}

<section className=' bg-[#fff] py-12'>

        <div className='container px-6 py-6 mx-auto'>
        <div className=''>
            <h2 className='text-3xl font-semibold text-[#433B39]'>Straightforward & Transparent Process</h2>
            <p className='text-base text-[#433B39]'>We love sharing how we produce our products, 
you exactly know what you are getting into your kitchen. </p>

          </div>
          


          <div className="card-box flex justify-between py-6">

            <div className="card w-[30%] bg-white p-6 flex flex-col">
              <div className="round p-2 w-[fit-content] flex align-center rounded-[50%] bg-[#543731]">
                <img src={ic4} className="h-[25px]" alt="" />
              </div>
              <h6 className='text-lg font-semibold my-2'>Increased output</h6>
              <p>During solvent extraction, addition of heat & solvents enable achieving a very high output.  </p>
            </div>

            <div className="card flex w-[30%] bg-white p-6 flex-col">
              <div className="round p-2 flex align-center w-[fit-content] rounded-[50%] bg-[#186218]">
                <img src={ic5} className="h-[25px]" alt="" />
              </div>
              <h6 className='text-lg font-semibold my-2'>Removed color & aroma</h6>
              <p>By bleaching process, oil looking as clear as water and without any aroma is achieved.</p>
            </div>


            <div className="card flex w-[30%] bg-white p-6 flex-col">
              <div className="round p-2 flex align-center w-[fit-content] rounded-[50%] bg-[#3877B2]">
                <img src={ic6} className="h-[25px]" alt="" />
              </div>
              <h6 className='text-lg font-semibold my-2'>Increased shelf life</h6>
              <p className='text-base'>Addition of preservatives makes sure that it can be kept on the shelf for longer time.</p>
            </div>


          </div>

        </div>

      </section>

      {/* SECTION ! */}

      <section className='py-12 bg-[#F4F9F4]'>

        <div className='container py-6 px-6 mx-auto'>
        <div className=''>
            <h2 className='text-3xl font-semibold text-[#433B39]'>Why is oil refined?</h2>
            <p className='text-base text-[#433B39]'>Most large-scale commercial cooking oil refinement will involve solvent extraction in order to achieve a product with the following properties: </p>

          </div>


          <div className="card-box flex justify-between py-6">

            <div className="card w-[30%] bg-white p-6 flex flex-col">
              <div className="round p-3 w-[fit-content] flex align-center rounded-[50%] bg-[#543731]">
                <img src={ic1} className="h-[16px]" alt="" />
              </div>
              <h6 className='text-lg font-semibold my-2'>Increased output</h6>
              <p>During solvent extraction, addition of heat & solvents enable achieving a very high output.  </p>
            </div>

            <div className="card flex w-[30%] bg-white p-6 flex-col">
              <div className="round p-3 flex align-center w-[fit-content] rounded-[50%] bg-[#186218]">
                <img src={ic2} className="h-[15px]" alt="" />
              </div>
              <h6 className='text-lg font-semibold my-2'>Removed color & aroma</h6>
              <p>By bleaching process, oil looking as clear as water and without any aroma is achieved.</p>
            </div>


            <div className="card flex w-[30%] bg-white p-6 flex-col">
              <div className="round p-3 flex align-center w-[fit-content] rounded-[50%] bg-[#3877B2]">
                <img src={ic3} className="h-[15px]" alt="" />
              </div>
              <h6 className='text-lg font-semibold my-2'>Increased shelf life</h6>
              <p className='text-base'>Addition of preservatives makes sure that it can be kept on the shelf for longer time.</p>
            </div>


          </div>

        </div>

      </section>

      {/* <ItemCard/> */}
    </div>
  )
}

export default Home