# Создает и загружает на сервер текущий тег по версии из package.json без создания билд-коммита
PACKAGE_VERSION=`node -p "require('./package.json').version"`
tagName=$PACKAGE_VERSION
tmpBranch='build/'$PACKAGE_VERSION
currBranch=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)

if [[ `git status --porcelain` ]]; then
    git checkout -b $tmpBranch

    echo 'Set tag' $tagName

    # commit pipe
    git add .
    git commit -m 'Build version '$PACKAGE_VERSION

    # tag pipe
    git tag -d $tagName
    git tag -a $tagName -m $tagName
    git push origin $tagName --force

    echo 'Tag '$tagName' added successfully!'

    git checkout $currBranch;
    git branch -D $tmpBranch

else
  echo 'No git changes'
fi