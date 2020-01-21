@@@Deplyment@@@W@

#Git commands

git init - Create a new git repo
git status - view all the changes to your project code
git add - Add files to staging area
git add . - adds all changed files
git commit - Creates a new commit with files from staging area
git commit -m "message" - commits with message
git log - View recent commits
git remote -v - shows us the urls

git remote add origin (gitHub repository url) - to do before the first push

git push -u origin master- pushes all the new changes to the master
only will need to use the u flag once as it means upstream
#SSH keys

ssh key - secure way to talk from our machine to github server

ls -a ~/.ssh - command that allows us to look for ssh keys from the root th -a flag allows hidden files tp be revealed

ssh-keygen -t rsa -b 4096 - how to create wsh key -t = type (rsa)
-b = bits (4096) the more bits harder to crack -C = comment (email) stick with default press enter treat this like a password

eval "$(ssh-agent -s)" - lets us know if ssh agent is running
ssh-add ~/.ssh/id_rsa - adds the identity of the key to machine second bit is where the file lives can now start using the key in github and others

pbcopy < ~/.ssh/id_rsa.pub- how to copy content of file to clipbiard

ssh -T git@github.com - making sure we are connected to github with key -T removes some stuff we dont need

from now on use the ssh url from git hub when creating repositories

script build- combines css files and js files to optimize performance now app is still the same but compacted to a small package called build

@@@Heroku deployment@@@

heroku --version - prints current version
heroku login - logs us in to our account
heroku create somename - creates app with that name