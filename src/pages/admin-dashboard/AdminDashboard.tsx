import Header from "../../components/Header";


export default function()
{
    return <Header navName="Movies" navigations={[{name: 'Movies', path: '/admin-movies'}, {name: 'Customers', path: '/customer'}]}/>
}