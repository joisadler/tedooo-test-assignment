import styles from './feed_item_action_button.module.scss';
import cn from 'classnames';
import icons, { IconName } from '@/components/icons';

interface FeedItemActionButtonProps {
  isActive: boolean;
  iconName: IconName;
  iconText: string;
  onToggle: () => void;
}

const FeedItemActionButton: React.FC<FeedItemActionButtonProps> = ({
  isActive,
  iconName,
  iconText,
  onToggle,
}) => {
  const Icon = icons[iconName];

  return (
    <button className={styles.container} onClick={onToggle}>
      <Icon className={cn(styles.icon, { [styles.active]: isActive })} />
      <span className={cn(styles.text, { [styles.active]: isActive })}>
        {iconText}
      </span>
    </button>
  );
};

export default FeedItemActionButton;
