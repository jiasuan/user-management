import { useRouter } from 'next/navigation'
import { AppBarProps } from '@/interfaces';
import { ArrowLeftIcon } from '@/components/atoms/icons';

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

    const backIcon = ArrowLeftIcon();
  
    return(
      <div className="flex justify-between py-6 items-center">
        <div className="flex flex-col pb-2">
            {backTo && 
                <button className="text-sm w-fit flex flex-row pb-2" onClick={handleNavi}>
                  <span className="pr-2">{backIcon}</span>
                  Back
                </button>
            }
            <p className="text-xl font-extrabold">{title}</p>
        </div>
        <div className="flex space-x-4">
            {actionBtn1 && actionBtn1}
            {actionBtn2 && actionBtn2}
        </div>
      </div>
  
    )
}