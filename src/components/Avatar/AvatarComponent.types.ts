export type AvatarProps = {
    avatarType: 'image'|'letter'
    color:AvatarColor
    size: AvatarSizes
    image?: string
    letter?: string
}

type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg'| 'xl';
type AvatarColor = 'blue'| 'grey' | 'green' | 'red'|  'yellow';

export type AvatarStyledProps = {
    size: AvatarSizes
    color: AvatarColor

}
