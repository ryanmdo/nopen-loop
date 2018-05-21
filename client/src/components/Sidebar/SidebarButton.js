import react,{Component} from 'react';
import './Sidebar.css'



class SidebarButton extends Component{


render(){
    return(

        //This was lifted straight from the example.
        //This would need to be reworked for the application
        <a href="#" data-target="#sidebar" data-toggle="collapse"><i class="fa fa-navicon fa-2x py-2 p-1"></i></a>

    )


}

};


export default SidebarButton;