#!/bin/sh

# This shell script performs a merge commit after resolving the merge conflict.
#
# How to execute this
# - Merge 'upstream/development' branch into ${CURRENT_BRANCH}: ./afterResolveMergeConflicts.sh
# - Merge 'upstream/targetBranchName' branch into ${CURRENT_BRANCH}: ./afterResolveMergeConflicts.sh ${targetBranchName}

echo "git remote add upstream https://github.com/tokyo-metropolitan-gov/covid19.git"
git remote add upstream https://github.com/tokyo-metropolitan-gov/covid19.git

if [ $# -ge 1 ]; then
  BRANCH_NAME=${1}
else
  BRANCH_NAME=development
fi

echo ; echo "git fetch --prune --all" ; git fetch --prune --all

echo ; echo "git merge upstream/${BRANCH_NAME}" ; git merge upstream/${BRANCH_NAME}
if [ $? -ne 0 ]; then
  exit 1
fi

echo ; echo "git add --all"
git add --all
if [ $? -ne 0 ]; then
  exit 2
fi

CURRENT_BRANCH=`git symbolic-ref --short HEAD`
COMMIT_MESSAGE="Merge 'upstream/development' branch into ${CURRENT_BRANCH}"

echo ; echo "git commit --no-verify -m \"${COMMIT_MESSAGE}\""
git commit --no-verify -m "${COMMIT_MESSAGE}"
if [ $? -ne 0 ]; then
  exit 3
fi

echo ; echo "git push -u origin \"${BRANCH_NAME}\""
git push -u origin "${BRANCH_NAME}"
if [ $? -ne 0 ]; then
  exit 4
fi

unset COMMIT_MESSAGE
unset CURRENT_BRANCH
