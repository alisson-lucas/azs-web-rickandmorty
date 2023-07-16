export default function Hero(props) {
    return (
        <div style={{
            '--image-url': `url('/images/banner-new.jpg')`, '--image-url-mobile': `url('/backgrounds/bg-moura-mobile.png')`,
        }} className='flex items-center justify-center relative w-full h-[400px] bg-[image:var(--image-url)] bg-cover bg-top bg-no-repeat after:content[""] after:absolute after:bg-gradient-to-t after:from-black/95 after:to-black/5 after:h-48 after:bottom-0 after:right-0 after:left-0 after:z-40'>
            <div className='flex items-end justify-start w-full h-full px-20 py-10 max-w-7xl'>
                <span className='text-5xl font-bold z-50'>{props.title} {props.episodeNumber}</span>
            </div>
        </div>
    )
}