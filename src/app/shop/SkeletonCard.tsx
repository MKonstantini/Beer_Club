import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = ({ amount }: any) => {
    console.log(amount)
    return (
        <SkeletonTheme baseColor='#8f8f8f' highlightColor='#505050'>
            <div className='w-2/3 flex flex-wrap justify-around m-20'>
                {
                    Array(amount).fill(0).map((_, index) =>
                        <div key={index} className='p-10 pb-5'>
                            <header className='w-60 mb-2'>
                                <Skeleton count={1} />
                            </header>
                            <div className='w-60 flex mb-4'>
                                <div className='w-2/3'>
                                    <Skeleton count={3} />
                                </div>
                                <div className='w-1/3'>
                                    <Skeleton circle width={60} height={60} />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </SkeletonTheme>
    )
}


export default SkeletonCard
