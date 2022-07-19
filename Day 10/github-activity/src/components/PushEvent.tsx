import React from 'react';
import { getCommitUrl } from "../utils"

export default function PushEvent(props: any) {
    return (
        <div className="item-commit">
            Related Commits
            {
                props.item.payload.commits.map((commit: any, index: any) => {
                    return (
                        <div key={index} className="item-commit-item">
                            <div className="item-commit-item-message">
                                {index + 1} ➡️ <a href={getCommitUrl(props.item.repo.name, commit.sha)} target={"_blank"} > {commit.message}</a>
                            </div>
                        </div>
                    )
                }
                )}
        </div>
    )
}