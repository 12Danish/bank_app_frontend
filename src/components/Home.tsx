import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Person4Icon from '@mui/icons-material/Person4';
import '../styles/home.css'; 
  
const Home = () => {
  return (
    <div className='home-body-wrapper'>
        <div className='option-tag  bg-indigo-500 hover:bg-indigo-400'>
            <div className='tag-icon'><AccountBalanceIcon sx={{ width: 200, height: 200 }}/></div>
            <div className='tag-small-text'>Balance:</div>
            <div className='tag-big-text'>200000</div>
        </div>
        <div className='option-tag  bg-violet-400 hover:bg-violet-300'>
        <div className='tag-icon'><CompareArrowsIcon sx={{ width: 200, height: 200 }}/></div>
            <div className='tag-small-text'>Transfer Money</div>
        </div>
        <div className='option-tag  bg-pink-400 hover:bg-pink-300'>
        <div className='tag-icon'><Person4Icon sx={{ width: 200, height: 200 }}/></div>
            <div className='tag-small-text'>Profile</div>
        </div>

    </div>
  )
}

export default Home