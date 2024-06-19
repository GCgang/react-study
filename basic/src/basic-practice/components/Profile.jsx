import Avatar from './Avatar';

export default function Profile({image, name, type, isNew}) {
    return (
        <div className='profile'>
            <Avatar
                image={image}
                isNew={isNew}
            />
            <h1>{name}</h1>
            <p>{type}</p>
        </div>
    );
}