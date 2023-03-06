package com.viaxlab.model;


public class Activities {

	private int activityId;
	private String title;
	private String type;
	private String startDate;
	private String endDate;
	private String status;

	public Activities() {

	}

	public Activities(int activityId, String title, String type, String startDate, String endDate, String status) {
		super();
		this.activityId = activityId;
		this.title = title;
		this.type = type;
		this.startDate = startDate;
		this.endDate = endDate;
		this.status = status;
	}

	public int getActivityId() {
		return activityId;
	}

	public void setActivityId(int activityId) {
		this.activityId = activityId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "[activityId=" + activityId + ", title=" + title + ", type=" + type + ", startDate=" + startDate
				+ ", endDate=" + endDate + ", status=" + status + "]";
	}	



}
