import React from 'react'
import Report from '../assets/report.png';
import { MdDeleteOutline } from "react-icons/md";

const MedRecord = () => {
  return (
    <div>
      <div class="flex justify-between p-8 mx-6 my-4 bg-sky-200 hover:shadow-xl rounded-2xl">
        <div class="flex">
          <div class="mr-8"><img src={Report} alt="Doc Image" class="pt-6"/></div>
          <div flex>
            <p class="text-2xl font-bold p-1">Chest X-Ray</p>
            <p class="text-xl p-1">Date: 10/98/2922</p>
            <p class="text-xl p-1">Conclusion: Ligament crack</p>
          </div>
        </div>
        <div>
          <button class="justify-end">
            <div class="bg-red-500 p-2 font-semibold rounded-2xl right-0">Delete<MdDeleteOutline class="text-3xl inline"/></div>
          </button>
        </div>
      </div>
      <div class="flex justify-between p-8 mx-6 my-4 bg-sky-200 hover:shadow-xl rounded-2xl">
        <div class="flex">
          <div class="mr-8"><img src={Report} alt="Doc Image" class="pt-6"/></div>
          <div flex>
            <p class="text-2xl font-bold p-1">Chest X-Ray</p>
            <p class="text-xl p-1">Date: 10/98/2922</p>
            <p class="text-xl p-1">Conclusion: Ligament crack</p>
          </div>
        </div>
        <div>
          <button class="justify-end">
            <div class="bg-red-500 p-2 font-semibold rounded-2xl right-0">Delete<MdDeleteOutline class="text-3xl inline"/></div>
          </button>
        </div>
      </div>
      <div class="flex justify-between p-8 mx-6 my-4 bg-sky-200 hover:shadow-xl rounded-2xl">
        <div class="flex">
          <div class="mr-8"><img src={Report} alt="Doc Image" class="pt-6"/></div>
          <div flex>
            <p class="text-2xl font-bold p-1">Chest X-Ray</p>
            <p class="text-xl p-1">Date: 10/98/2922</p>
            <p class="text-xl p-1">Conclusion: Ligament crack</p>
          </div>
        </div>
        <div>
          <button class="justify-end">
            <div class="bg-red-500 p-2 font-semibold rounded-2xl right-0">Delete<MdDeleteOutline class="text-3xl inline"/></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MedRecord