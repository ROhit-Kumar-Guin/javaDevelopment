class Super{
    public void a(){
        System.out.println("Super a");
    }
    public void b(){
        System.out.println("Super b");
    }
    public void c(){
        System.out.println("Super c");
    }
}
class Sub extends Super{
    public void a(){
        System.out.println("Sub a");
    }
    public void b(){
        System.out.println("sub b");
    }
    public void c(int x){
        System.out.println("sub c"+x);
    }
    public void d(){
        System.out.println("sub d");
    }
}
class DMD {
    public static void main(String[] args) {
        Super s = new Sub();
        s.a();
        s.b();
        s.c();
    }
}