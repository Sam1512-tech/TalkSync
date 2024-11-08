import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className='flex flex-col sm:flex-row sm:h-[450px] mt-20 sm:mt-0 mb-4 sm:mb-0 sm:ml-4 sm:mr md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100'>
                <Sidebar />                      
                <MessageContainer />
        </div>
    );
};
export default Home;
