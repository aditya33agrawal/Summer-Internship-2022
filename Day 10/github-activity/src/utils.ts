// get css class name for github activity event type
/**
 * 
 * @param type {string} the event name parameter
 * @returns {string} the corresponding css class name
 */
export function getActivityClass (type : string) : string {
    const classMap : {[key: string]: string} = {
        "CreateEvent" : "activity-item-create-event",
        "DeleteEvent" : "activity-item-delete-event",
        "ForkEvent" : "activity-item-fork-event",
        "WatchEvent" : "activity-item-watch-event",
        "PullRequestEvent" : "activity-item-pull-request-event",
        "IssuesEvent" : "activity-item-issues-event",
        "IssueCommentEvent" : "activity-item-issue-comment-event",
        "PullRequestReviewEvent" : "activity-item-pull-request-review-event",
        "PublicEvent" : "activity-item-public-event",
    }

    if(type in classMap) {
        return classMap[type];
    }else{
        // activity-item-default
        return "activity-item-default";
    }
}

export function getCommitUrl(repo: string, sha: string) : string {
    return `https://github.com/${repo}/commit/${sha}`;
}
