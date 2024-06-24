import { useRouter } from 'next/navigation'
import { AppBarProps } from '@/interfaces';


export default function AppBar(props: AppBarProps){

    //This is App Bar Component

    const { title, backTo, actionBtn1, actionBtn2 } = props;

    const router = useRouter();
  
    //back button function
    const handleNavi = () => {
      //navigate to defined backTo path
      const path = backTo || ''
      router.push(path);
    }
  
    return(
      <div className="flex justify-between py-6 items-center">
        <div className="flex flex-col pb-2">
            {backTo && <button className="text-sm w-fit" onClick={handleNavi}>Back</button>}
            <p className="text-xl font-extrabold">{title}</p>
        </div>
        <div className="flex space-x-4">
            {actionBtn1 && actionBtn1}
            {actionBtn2 && actionBtn2}
        </div>
      </div>
  
    )
}