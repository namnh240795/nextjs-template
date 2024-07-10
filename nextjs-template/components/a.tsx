import * as Popover from '@radix-ui/react-popover';
import './a.styles.css'

const PopoverDemo = () => (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">More info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent">
          Some more info…
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
  
  export default PopoverDemo;