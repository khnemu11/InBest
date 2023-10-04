package com.jrjr.inbest.user.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@ToString
public class FriendDTO {

	Long userSeq;

	private String email;

	private String nickname;

	private String profileImgSearchName;

	private Long tier;

	private Boolean isFollowBack;
}
