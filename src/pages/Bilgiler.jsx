import React from 'react'

const Bilgiler = () => {
  return (
    <div>
          <table className='w-full border-separate border-spacing-2'>
                            <thead>
                                <tr>
                                    <th className='border border-slate-600 rounded-md text-center' style={{backgroundColor:"green"}}>Yeşil ise Tarihi başladı demektir</th>
                                    <th className='border border-slate-600 rounded-md text-center' style={{backgroundColor:"yellow"}}>Sarı ise bitiş Tarihi yaklaştı demektir</th>
                                    <th className='border border-slate-600 rounded-md text-center' style={{backgroundColor:"red"}}>Kırmızı ise Tarihi bitti demektir</th>

                                </tr>
                            </thead>
                            </table>
        
    </div>
  )
}

export default Bilgiler