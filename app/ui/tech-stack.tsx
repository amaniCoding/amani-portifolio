'use client'

import { motion } from "motion/react"


export default function TechStacks() {
  return (
    <section className="w-full py-10 dark:bg-gray-800" id="skills">
      <motion.div
        initial={{ translateY: 75, opacity: 0 }}
        viewport={{ once: true }}

        whileInView={{
          translateY: 0,
          opacity: 1,
          transition: { duration: 0.8, delay: 0.5 }
        }}>
        <div className="mx-auto max-w-screen-sm mb-4">
          <h1 className='md:text-xl text-lg font-bold text-center mb-1 dark:text-slate-400'>Tech Stacks</h1>
          <p className="text-center mb-2 dark:text-slate-200 px-3">Here are a list of tools, libraries and platforms I have had precious experience on.</p>
        </div>
      </motion.div>
      <div className="mx-auto max-w-screen-xl py-2 md:py-10">
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-1">
          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}

            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.8 }
            }}>
            <div className="flex flex-col items-center justify-center group">
              <div className="md:w-32 md:h-32 w-20 h-20 rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5">
                <div className="flex items-center justify-center rounded-full md:w-28 md:h-28 h-20 w-20 dark:bg-gray-600">

                  <svg className="" viewBox="-3.2 -3.2 38.40 38.40" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="19.2" className="fill-white group-hover:fill-blue-600 dark:group-hover:fill-gray-600 transition-all duration-150 ease-in-out" fill="#7ed0ec" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_reactjs</title><circle cx="16" cy="15.974" r="2.5" className="fill-blue-600 dark:fill-gray-700 group-hover:fill-white dark:group-hover:fill-gray-white"></circle><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" className="fill-blue-600 dark:fill-gray-700 group-hover:fill-white"></path><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" className="fill-blue-600 dark:fill-gray-700 group-hover:fill-white"></path><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" className="fill-blue-600 dark:fill-gray-700 group-hover:fill-white"></path></g></svg>
                </div>
              </div>
              <div>
                <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>React</p>

              </div>
            </div>
          </motion.div>



          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}

            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.2 }
            }}>
            <div className="flex flex-col items-center justify-center group">
              <div className="md:w-32 md:h-32 w-20 h-20 rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5">

                <div className="flex items-center justify-center rounded-full md:w-28 md:h-28 h-20 w-20 dark:bg-gray-600">
                  <svg className=" w-full h-full fill-white group-hover:fill-blue-600 dark:group-hover:fill-gray-600 transition-all duration-150 ease-in-out" fill="#d21919" viewBox="-2.4 -2.4 28.80 28.80" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#d21919" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" className=" group-hover:stroke-white stroke-blue-600 dark:stroke-gray-700 transition-all duration-150 ease-in-out" stroke="red" strokeWidth="2.88"><title>Next.js icon</title><path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z"></path></g><g id="SVGRepo_iconCarrier"><title>Next.js icon</title><path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z"></path></g></svg>
                </div>
              </div>
              <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>Next.js</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}

            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3 }
            }}>
            <div className="flex flex-col items-center justify-center group">
              <div className="md:w-32 md:h-32 w-20 h-20 rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5">

                <div className="flex items-center justify-center rounded-full md:w-28 md:h-28 h-20 w-20 dark:bg-gray-600">

                  <svg className="" viewBox="-3.2 -3.2 38.40 38.40" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="19.2" className="group-hover:fill-blue-600 dark:group-hover:fill-gray-600 fill-white transition-all duration-150 ease-in-out" fill="#7ed0ec" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z" className="fill-blue-600 dark:fill-gray-700 group-hover:fill-white" fill="#8CC84B"></path> <path d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z" className="group-hover:fill-white fill-blue-600 dark:fill-gray-600" fill="#8CC84B"></path> </g></svg>
                </div>
              </div>
              <div>
                <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>Node .js</p>

              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}

            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.4 }
            }}>
            <div className="flex flex-col items-center justify-center group">
              <div className="md:w-32 md:h-32 w-20 h-20 rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5">

                <div className="flex items-center justify-center rounded-full md:w-28 md:h-28 h-20 w-20 dark:bg-gray-600">

                  <svg className="" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" className="fill-white group-hover:fill-blue-600 dark:group-hover:fill-gray-600 transition-all duration-150 ease-in-out" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18V6" className="group-hover:stroke-white stroke-blue-600 dark:stroke-gray-600 transition-all duration-150 ease-in-out" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 6V18" className="group-hover:stroke-white dark:stroke-gray-700 stroke-blue-600 transition-all duration-150 ease-in-out" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z" className="group-hover:stroke-white dark:stroke-gray-700 stroke-blue-600 transition-all duration-150 ease-in-out" stroke="#1C274C" strokeWidth="1.5"></path> <path d="M20 12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12" className="group-hover:stroke-white dark:stroke-gray-700 stroke-blue-600 transition-all duration-150 ease-in-out " stroke="#1C274C" strokeWidth="1.5"></path> <path d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18" className="group-hover:stroke-white dark:stroke-gray-700 stroke-blue-600 transition-all duration-150 ease-in-out" stroke="#1C274C" strokeWidth="1.5"></path> </g></svg>
                </div>
              </div>
              <div>
                <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>MongoDb / SQL</p>

              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}

            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.5 }
            }}>
            <div className="flex flex-col items-center justify-center group">
              <div className="md:w-32 md:h-32 w-20 h-20 rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5">

                <div className="flex items-center justify-center rounded-full md:w-28 md:h-28 h-20 w-20 dark:bg-gray-600">

                  <svg className="" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="19.2" className="fill-white group-hover:fill-blue-600 dark:group-hover:fill-gray-600 transition-all duration-150 ease-in-out" fill="#7ed0ec" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className="group-hover:fill-white fill-blue-600 dark:fill-gray-700 transition-all duration-150 ease-in-out" fill="#444444" d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"></path> </g></svg>
                </div>
              </div>
              <div>
                <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>Javascript / Typescript</p>

              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}

            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.6 }
            }}>
            <div className="flex flex-col items-center justify-center group">
              <div className="md:w-32 md:h-32 w-20 h-20 rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5">

                <div className="flex items-center justify-center rounded-full md:w-28 md:h-28 h-20 w-20 dark:bg-gray-600">

                  <svg className=" dark:fill-gray-700 fill-blue-600 dark:stroke-gray-700 stroke-blue-600 group-hover:stroke-white group-hover:fill-white transition-all duration-150 ease-in-out" fill="blue" viewBox="-2.4 -2.4 28.80 28.80" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#b73838"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" className="group-hover:fill-blue-600 dark:group-hover:fill-gray-600 fill-white transition-all duration-150 ease-in-out" fill="red" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Tailwind CSS icon</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></g></svg>

                </div>
              </div>
              <div>
                <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>Css / TailwindCss</p>

              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}

            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.7 }
            }}>
            <div className="flex flex-col items-center justify-center group">
              <div className="md:w-32 md:h-32 w-20 h-20 rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5">

                <div className="flex items-center justify-center rounded-full md:w-28 md:h-28 h-20 w-20 dark:bg-gray-600">

                  <svg className="group" viewBox="-25.6 -25.6 307.20 307.20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-25.6" y="-25.6" width="307.20" height="307.20" rx="153.6" className="group-hover:fill-blue-600 dark:group-hover:fill-gray-600 fill-white" fill="#7ed0ec" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z" className="group-hover:fill-white fill-blue-600 dark:fill-gray-700" fill="#764ABC"></path></g></svg>              </div>
              </div>
              <div>
                <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>Redux</p>

              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}

            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.8 }
            }}>
            <div className="flex flex-col items-center justify-center group">
              <div className="md:w-32 md:h-32 w-20 h-20 rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5">

                <div className="flex items-center justify-center rounded-full md:w-28 md:h-28 h-20 w-20 dark:bg-gray-600">

                  <svg className="group" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" className="group-hover:fill-blue-600 dark:group-hover:fill-gray-600 fill-white" fill="#7ed0ec" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z" className="group-hover:fill-white fill-blue-600 dark:fill-gray-700" fill="#000000"></path> </g></svg>
                </div>
              </div>
              <div>
                <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>Git</p>

              </div>
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  )
}