import {useState} from 'react';
import TutorialList from './TutorialList';


const Home=()=>{
	const [tutorials,setTutorials]=useState([
		{title:"Test number 1",body:"This is a test",author:"griffpatch",id:1},
		{title:"Test number 2",body:"This is another test",author:"will_wam",id:2}
	]);
	return(
		<div class="home">
			<TutorialList tutorials={tutorials} title={"All tutorials"}/>
		</div>
	);
}

export default Home;
