list<integer> list_numbers= new list<integer>();
list_numbers.add(1);
list_numbers.add(2);
list_numbers.add(3);
list_numbers.add(3);
system.debug('Amount: ' + list_numbers);

//Set

set<integer> list_set= new set<integer>();
list_set.add(1);
list_set.add(2);
list_set.add(3);
list_set.add(3);
system.debug('This a set: ' + list_set);

//Use of For loop 
for (integer i=1;i<=10000;i++){
    list_set.add(i);
}
system.debug('This a set: ' + list_set);

//Use of Maps -- Key Value Pair 

map<integer,string> list_map= new map<integer,string>();
list_map.put(1,'one');
list_map.put(2,'two');
list_map.put(3,'three');
list_map.put(3,'Four');
system.debug('This a Map: ' + list_map);
system.debug('This the third element: ' + list_map.get(3));

//Conditional Statements- flows within Apex

Integer totsum=0;
list<integer> listofnumbers=new list<integer>();

for (integer i = 1; i<=10;i++){
    listofnumbers.add(i);
}
system.debug('listofnumbers:'+listofnumbers);

//Introducing if-else

for (integer i=1;i<listofnumbers.size();i++){
    if(math.mod(listofnumbers[i],2)==0){
        totsum=totsum + listofnumbers[i];
        system.debug('total sum ='+totsum);
    }
}

system.debug('Aggregate sum =' +totsum);

//Assignment --All odd Numbers stored 1 to 20

Integer totsumz=0;
list<integer> listofnumberz =new list<integer>();

for (integer i = 1; i<=20;i++){
    listofnumberz.add(i);
}
system.debug('listofnumbers:'+listofnumberz);

//Introducing if-else
integer i=1;
 while  (i < listofnumberz.size()){
    if(math.mod(listofnumberz[i],2)==0){
        totsumz=totsum + listofnumberz[i];
        system.debug('total sum ='+totsumz);     
    }
}

system.debug('Aggregate sum =' +totsumz);
















