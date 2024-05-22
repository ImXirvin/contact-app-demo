type TAvatarProps = {
    size?: 'sm' | 'md' | 'lg';
}

const SIZE = {
    sm: {
        height: 'h-8',
        iconSize: 'text-xl'
    },
    md: {
        height: 'h-12',
        iconSize: 'text-2xl'
    },
    lg: {
        height: 'h-24',
        iconSize: 'text-5xl'
    }
}

const Avatar: React.FC<TAvatarProps> = ({size}) => {
    const avatarSize = SIZE[size || 'md'];

    return (
        <div className={`grid place-items-center ${avatarSize.height} bg-primary/50 rounded-full aspect-square relative`}>
            <i className={`bi bi-person-fill ${avatarSize.iconSize} text-on-primary`} />
        </div>
    );
}

export default Avatar;