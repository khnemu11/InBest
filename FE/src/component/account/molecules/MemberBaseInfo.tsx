interface Props {
  profileImg: string;
  nickname: string;
  email: string;
  following: number;
  follower: number;
  seq: number;
  setShowType: React.Dispatch<React.SetStateAction<string | null>>;
  setShowFollowWindow: React.Dispatch<React.SetStateAction<boolean>>;
}
const MemberBaseInfo = ({
  profileImg,
  nickname,
  email,
  following,
  follower,
  setShowType,
  setShowFollowWindow,
}: Props) => {
  return (
    <div className="flex items-center justify-around">
      <img src={profileImg} alt="유저 이미지" className="rounded-full w-32 h-32" />
      <div className=" w-40 ms-5">
        <div className="text-center text-2xl border-b-2 mb-0 pb-2">{nickname}</div>
        <div className="flex justify-center">
          <div
            className="border-e-2 pt-2 w-1/2 text-center hover:cursor-pointer hover:bg-green-100 duration-300 transition-colors"
            onClick={() => {
              setShowType("following");
              setShowFollowWindow(true);
            }}
          >
            <div>팔로잉</div>
            <div>{follower}</div>
          </div>
          <div
            className="pt-2 w-1/2 text-center hover:cursor-pointer hover:bg-green-100 duration-300 transition-colors"
            onClick={() => {
              setShowType("follower");
              setShowFollowWindow(true);
            }}
          >
            <div>팔로워</div>
            <div>{following}</div>
          </div>
        </div>
      </div>
      <div className="flex items-start h-20 text-sm text-gray-400">{email}</div>
    </div>
  );
};
export default MemberBaseInfo;
