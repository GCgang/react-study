import './App.css'
import Avatar from './components/Avatar';
import Profile from './components/Profile'


export default function AppProfile() {
    return (
        <>
            <Avatar
                image='https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                isNew={true}
            />
            <Profile
                image='https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='골든'
                type='Dog'
                isNew={true}
            />
            <Profile
                image='https://images.unsplash.com/photo-1535914191444-2a3b177956c7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='점박'
                type='Dog'
            />
            <Profile
                image='https://images.unsplash.com/photo-1671202763812-539806f76255?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='사모'
                type='Dog'
            />
        </>
    );
}