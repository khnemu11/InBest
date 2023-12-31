import { GroupSetting } from "./../type/GroupSetting";
import { instanceWithAuth } from "./interceptors";
import userStore from "../store/userStore";
import {
  SearchUserList,
  MyGroupList,
  WaitingGroupDetail,
  InProgressGroupDetail,
  JoinableGroupList,
  JoinableGroupDetail,
  InvestingStatus,
} from "../type/Group";
import { ApiSuccessMessage } from "../type/ApiSuccessMessage";

const apiWithAuth = instanceWithAuth("invest-service/group");

export const getInvestingStatus = async (): Promise<InvestingStatus> => {
  const { data } = await apiWithAuth.get("/status");
  return data;
};

export const createGroup = async (groupSetting: GroupSetting): Promise<ApiSuccessMessage> => {
  const { userInfo } = userStore.getState();
  const invitedUserSeqList = groupSetting.invitedUsers.map((user) => user.seq);
  invitedUserSeqList.push(userInfo!.seq);
  const { invitedUsers, ...rest } = groupSetting;
  invitedUsers;
  const { data } = await apiWithAuth.post("", {
    ...rest,
    userSeqList: invitedUserSeqList,
  });
  return data;
};

export const searchUser = async (nickname: string): Promise<SearchUserList> => {
  const { data } = await apiWithAuth.get("", { params: { keyword: nickname } });
  return data;
};

export const getMyGroupList = async (): Promise<MyGroupList> => {
  const { userInfo } = userStore.getState();
  const { data } = await apiWithAuth.get("/my-list", { params: { userNickname: userInfo?.nickname } });
  return data;
};

export const getWaitingGroupDetail = async (simulationSeq: number): Promise<WaitingGroupDetail> => {
  const { data } = await apiWithAuth.get("/details", { params: { simulationSeq, progressState: "waiting" } });
  return data;
};

export const getInProgressGroupDetail = async (simulationSeq: number): Promise<InProgressGroupDetail> => {
  const { data } = await apiWithAuth.get("/details", { params: { simulationSeq, progressState: "inProgress" } });
  return data;
};

export const getJoinableGroupList = async (): Promise<JoinableGroupList> => {
  const { userInfo } = userStore.getState();
  const { data } = await apiWithAuth.get("/joinable-list", {
    params: { userNickname: userInfo?.nickname },
  });
  return data;
};

export const getJoinableGroupDetail = async (simulationSeq: number): Promise<JoinableGroupDetail> => {
  const { data } = await apiWithAuth.get("/details", { params: { simulationSeq, progressState: "waiting" } });
  return data;
};

export const joinGroup = async (simulationSeq: number): Promise<ApiSuccessMessage> => {
  const { userInfo } = userStore.getState();
  const { data } = await apiWithAuth.post("/join", { simulationSeq, userSeq: userInfo?.seq });
  return data;
};

export const exitGroup = async (simulationSeq: number): Promise<ApiSuccessMessage> => {
  const { userInfo } = userStore.getState();
  const { data } = await apiWithAuth.post("/exit", { simulationSeq, userSeq: userInfo?.seq });
  return data;
};

export const startInvesting = async (simulationSeq: number): Promise<ApiSuccessMessage> => {
  const { data } = await apiWithAuth.post("/start", { simulationSeq });
  return data;
};
