// export interface IGithubEvent {
//     id:         string;
//     type:       string;
//     actor:      Actor;
//     repo:       IGithubEventRepo;
//     payload:    Payload;
//     public:     boolean;
//     created_at: Date;
//     org?:       Actor;
// }

export interface IGithubEvent {
    id:         string;
    type:       string;
    actor:      Actor;
    repo:       IGithubEventRepo;
    payload:    Payload;
    public:     boolean;
    created_at: Date;
    org?:       Actor;
}

export interface Actor {
    id:             number;
    login:          DisplayLoginEnum;
    display_login?: DisplayLoginEnum;
    gravatar_id:    string;
    url:            string;
    avatar_url:     string;
}

export enum DisplayLoginEnum {
    Alex = "alex",
    Fishinabarrel = "fishinabarrel",
    Pyca = "pyca",
}

export interface Payload {
    ref?:           string;
    ref_type?:      string;
    pusher_type?:   string;
    master_branch?: Branch;
    description?:   string;
    action?:        Action;
    number?:        number;
    pull_request?:  PayloadPullRequest;
    push_id?:       number;
    size?:          number;
    distinct_size?: number;
    head?:          string;
    before?:        string;
    commits?:       Commit[];
    review?:        Review;
    issue?:         Issue;
    comment?:       Comment;
}

export enum Action {
    Closed = "closed",
    Created = "created",
    Opened = "opened",
}

export interface Comment {
    url:                      string;
    html_url:                 string;
    issue_url:                string;
    id:                       number;
    node_id:                  string;
    user:                     User;
    created_at:               Date;
    updated_at:               Date;
    author_association:       AuthorAssociation;
    body:                     string;
    reactions:                Reactions;
    performed_via_github_app: null;
}

export enum AuthorAssociation {
    Contributor = "CONTRIBUTOR",
    Member = "MEMBER",
}

export interface Reactions {
    url:         string;
    total_count: number;
    "+1":        number;
    "-1":        number;
    laugh:       number;
    hooray:      number;
    confused:    number;
    heart:       number;
    rocket:      number;
    eyes:        number;
}

export interface User {
    login:               NameEnum;
    id:                  number;
    node_id:             UserNodeID;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           GistsURL;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                Type;
    site_admin:          boolean;
}

export enum GistsURL {
    HTTPSAPIGithubCOMUsersAlexGistsGistID = "https://api.github.com/users/alex/gists{/gist_id}",
    HTTPSAPIGithubCOMUsersDependabot5Bbot5DGistsGistID = "https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}",
    HTTPSAPIGithubCOMUsersJonathanslendersGistsGistID = "https://api.github.com/users/jonathanslenders/gists{/gist_id}",
    HTTPSAPIGithubCOMUsersPycaGistsGistID = "https://api.github.com/users/pyca/gists{/gist_id}",
}

export enum NameEnum {
    Alex = "alex",
    DependabotBot = "dependabot[bot]",
    Jonathanslenders = "jonathanslenders",
    Pyca = "pyca",
}

export enum UserNodeID {
    MDEyOk9YZ2FuaXphdGlvbjU2MTU3Mzc = "MDEyOk9yZ2FuaXphdGlvbjU2MTU3Mzc=",
    MDM6Qm90NDk2OTkzMzM = "MDM6Qm90NDk2OTkzMzM=",
    MDQ6VXNlcjIxNjYzOA = "MDQ6VXNlcjIxNjYzOA==",
    MDQ6VXNlcjc3Mg = "MDQ6VXNlcjc3Mg==",
}

export enum Type {
    Bot = "Bot",
    Organization = "Organization",
    User = "User",
}

export interface Commit {
    sha:      string;
    author:   Author;
    message:  string;
    distinct: boolean;
    url:      string;
}

export interface Author {
    email: string;
    name:  NameEnum;
}

export interface Issue {
    url:                      string;
    repository_url:           string;
    labels_url:               string;
    comments_url:             string;
    events_url:               string;
    html_url:                 string;
    id:                       number;
    node_id:                  string;
    number:                   number;
    title:                    string;
    user:                     User;
    labels:                   Label[];
    state:                    State;
    locked:                   boolean;
    assignee:                 null;
    assignees:                any[];
    milestone:                null;
    comments:                 number;
    created_at:               Date;
    updated_at:               Date;
    closed_at:                null;
    author_association:       string;
    active_lock_reason:       null;
    body:                     string;
    reactions:                Reactions;
    timeline_url:             string;
    performed_via_github_app: null;
    draft?:                   boolean;
    pull_request?:            IssuePullRequest;
}

export interface Label {
    id:          number;
    node_id:     string;
    url:         string;
    name:        string;
    color:       string;
    default:     boolean;
    description: string;
}

export interface IssuePullRequest {
    url:       string;
    html_url:  string;
    diff_url:  string;
    patch_url: string;
    merged_at: null;
}

export enum State {
    Closed = "closed",
    Open = "open",
}

export enum Branch {
    Main = "main",
    Master = "master",
}

export interface PayloadPullRequest {
    url:                    string;
    id:                     number;
    node_id:                string;
    html_url:               string;
    diff_url:               string;
    patch_url:              string;
    issue_url:              string;
    number:                 number;
    state:                  State;
    locked:                 boolean;
    title:                  string;
    user:                   User;
    body:                   null | string;
    created_at:             Date;
    updated_at:             Date;
    closed_at:              Date | null;
    merged_at:              Date | null;
    merge_commit_sha:       null | string;
    assignee:               null;
    assignees:              any[];
    requested_reviewers:    any[];
    requested_teams:        any[];
    labels:                 Label[];
    milestone:              null;
    draft:                  boolean;
    commits_url:            string;
    review_comments_url:    string;
    review_comment_url:     string;
    comments_url:           string;
    statuses_url:           string;
    head:                   Base;
    base:                   Base;
    _links:                 PullRequestLinks;
    author_association:     AuthorAssociation;
    auto_merge:             AutoMerge | null;
    active_lock_reason:     null;
    merged?:                boolean;
    mergeable?:             null;
    rebaseable?:            null;
    mergeable_state?:       string;
    merged_by?:             User | null;
    comments?:              number;
    review_comments?:       number;
    maintainer_can_modify?: boolean;
    commits?:               number;
    additions?:             number;
    deletions?:             number;
    changed_files?:         number;
}

export interface PullRequestLinks {
    self:            Comments;
    html:            Comments;
    issue:           Comments;
    comments:        Comments;
    review_comments: Comments;
    review_comment:  Comments;
    commits:         Comments;
    statuses:        Comments;
}

export interface Comments {
    href: string;
}

export interface AutoMerge {
    enabled_by:     User;
    merge_method:   string;
    commit_title:   string;
    commit_message: string;
}

export interface Base {
    label: string;
    ref:   string;
    sha:   string;
    user:  User;
    repo:  BaseRepo;
}

export interface BaseRepo {
    id:                number;
    node_id:           RepoNodeID;
    name:              RepoName;
    full_name:         FullName;
    private:           boolean;
    owner:             User;
    html_url:          string;
    description:       null | string;
    fork:              boolean;
    url:               string;
    forks_url:         string;
    keys_url:          string;
    collaborators_url: string;
    teams_url:         string;
    hooks_url:         string;
    issue_events_url:  string;
    events_url:        string;
    assignees_url:     string;
    branches_url:      string;
    tags_url:          string;
    blobs_url:         string;
    git_tags_url:      string;
    git_refs_url:      string;
    trees_url:         string;
    statuses_url:      string;
    languages_url:     string;
    stargazers_url:    string;
    contributors_url:  string;
    subscribers_url:   string;
    subscription_url:  string;
    commits_url:       string;
    git_commits_url:   string;
    comments_url:      string;
    issue_comment_url: string;
    contents_url:      string;
    compare_url:       string;
    merges_url:        string;
    archive_url:       string;
    downloads_url:     string;
    issues_url:        string;
    pulls_url:         string;
    milestones_url:    string;
    notifications_url: string;
    labels_url:        string;
    releases_url:      string;
    deployments_url:   string;
    created_at:        Date;
    updated_at:        Date;
    pushed_at:         Date;
    git_url:           GitURL;
    ssh_url:           SSHURL;
    clone_url:         string;
    svn_url:           string;
    homepage:          null | string;
    size:              number;
    stargazers_count:  number;
    watchers_count:    number;
    language:          Language;
    has_issues:        boolean;
    has_projects:      boolean;
    has_downloads:     boolean;
    has_wiki:          boolean;
    has_pages:         boolean;
    forks_count:       number;
    mirror_url:        null;
    archived:          boolean;
    disabled:          boolean;
    open_issues_count: number;
    license:           License;
    allow_forking:     boolean;
    is_template:       boolean;
    topics:            Topic[];
    visibility:        Visibility;
    forks:             number;
    open_issues:       number;
    watchers:          number;
    default_branch:    Branch;
}

export enum FullName {
    AlexCSVSQL = "alex/csv-sql",
    AlexOtpCop = "alex/otp-cop",
    AlexRevocationTracker = "alex/revocation-tracker",
    PycaCryptography = "pyca/cryptography",
}

export enum GitURL {
    GitGithubCOMAlexCSVSQLGit = "git://github.com/alex/csv-sql.git",
    GitGithubCOMAlexOtpCopGit = "git://github.com/alex/otp-cop.git",
    GitGithubCOMAlexRevocationTrackerGit = "git://github.com/alex/revocation-tracker.git",
    GitGithubCOMPycaCryptographyGit = "git://github.com/pyca/cryptography.git",
}

export enum Language {
    Python = "Python",
    Rust = "Rust",
}

export interface License {
    key:     Key;
    name:    LicenseName;
    spdx_id: SpdxID;
    url:     null | string;
    node_id: LicenseNodeID;
}

export enum Key {
    BSD3Clause = "bsd-3-clause",
    Other = "other",
}

export enum LicenseName {
    BSD3ClauseNewOrRevisedLicense = "BSD 3-Clause \"New\" or \"Revised\" License",
    Other = "Other",
}

export enum LicenseNodeID {
    MDc6TGljZW5ZZTA = "MDc6TGljZW5zZTA=",
    MDc6TGljZW5ZZTU = "MDc6TGljZW5zZTU=",
}

export enum SpdxID {
    BSD3Clause = "BSD-3-Clause",
    Noassertion = "NOASSERTION",
}

export enum RepoName {
    CSVSQL = "csv-sql",
    Cryptography = "cryptography",
    OtpCop = "otp-cop",
    RevocationTracker = "revocation-tracker",
}

export enum RepoNodeID {
    MDEwOlJlcG9ZaXRvcnk0MDc3OTE4MA = "MDEwOlJlcG9zaXRvcnk0MDc3OTE4MA==",
    MDEwOlJlcG9ZaXRvcnk2MjkyODUXNg = "MDEwOlJlcG9zaXRvcnk2MjkyODUxNg==",
    MDEwOlJlcG9ZaXRvcnk5ODc1NTg0OA = "MDEwOlJlcG9zaXRvcnk5ODc1NTg0OA==",
    MDEwOlJlcG9ZaXRvcnkxMTkzOTQ4NA = "MDEwOlJlcG9zaXRvcnkxMTkzOTQ4NA==",
}

export enum SSHURL {
    GitGithubCOMAlexCSVSQLGit = "git@github.com:alex/csv-sql.git",
    GitGithubCOMAlexOtpCopGit = "git@github.com:alex/otp-cop.git",
    GitGithubCOMAlexRevocationTrackerGit = "git@github.com:alex/revocation-tracker.git",
    GitGithubCOMPycaCryptographyGit = "git@github.com:pyca/cryptography.git",
}

export enum Topic {
    Cryptography = "cryptography",
    Python = "python",
}

export enum Visibility {
    Public = "public",
}

export interface Review {
    id:                 number;
    node_id:            string;
    user:               User;
    body:               string;
    commit_id:          string;
    submitted_at:       Date;
    state:              string;
    html_url:           string;
    pull_request_url:   string;
    author_association: AuthorAssociation;
    _links:             ReviewLinks;
}

export interface ReviewLinks {
    html:         Comments;
    pull_request: Comments;
}

export interface IGithubEventRepo {
    id:   number;
    name: string;
    url:  string;
}
