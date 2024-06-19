export default function Avatar({image, isNew}) {
    return (
        <div className='avatar'>
            <img
                className='photo'
                src={image}
                alt="강아지 사진"
            />
            {isNew && <span className='new'>New</span>}
        </div>
    );
}