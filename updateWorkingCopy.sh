#!/bin/sh

# This shell script synchronizes the specified branch (or development, if not specified) 
# with the upstream repository.
#
# How to execute this
# - Update development branch: ./updateWorkingCopy.sh
# - Update target branch: ./updateWorkingCopy.sh ${targetBranchName}

echo "git remote add upstream https://github.com/tokyo-metropolitan-gov/covid19.git"
git remote add upstream https://github.com/tokyo-metropolitan-gov/covid19.git

if [ $# -ge 1 ]; then
  BRANCH_NAME=${1}
else
  BRANCH_NAME=development
fi

echo ; echo "git fetch --prune --all" ; git fetch --prune --all

echo ; echo "git checkout ${BRANCH_NAME}"

git checkout ${BRANCH_NAME}
if [ $? -ne 0 ]; then
  exit 1
fi

echo ; echo "git merge upstream/${BRANCH_NAME}" ; git merge upstream/${BRANCH_NAME}
if [ $? -ne 0 ]; then
  exit 2
fi

echo ; echo "git push -u origin ${BRANCH_NAME}" ; git push -u origin development
if [ $? -ne 0 ]; then
  exit 3
fi

echo ; echo "git branch" ; git branch
