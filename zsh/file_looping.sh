for file in *gz
> do
> mkdir $file.dir
> ( cd $file.dir; gzip -dc $file | tar xf - )
> done


for x in `ls -tr *.log`
> do
> cat $x >> biglog
> done


for d in *; do; touch "$d/.gitkeep"; done