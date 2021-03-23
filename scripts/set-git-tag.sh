# Добавляет актуальный тег по версии из package.json
PACKAGE_VERSION=`node -p "require('./package.json').version"`
tagName=$PACKAGE_VERSION
isPush=$1

if [[ `git status --porcelain` ]]; then
    echo 'Set tag' $tagName

    # commit pipe
    git add .
    git commit -m 'Build version '$PACKAGE_VERSION

    # check push flag
    if [ $isPush = '--push' ]; then
        git push

        echo 'Commit pushed'
    else
        echo 'Commit not pushed'
    fi

    # tag pipe
    git tag -d $tagName
    git tag -a $tagName -m $tagName
    git push origin $tagName --force

    echo 'Tag '$tagName' added successfully!'

else
  echo 'No git changes'
fi