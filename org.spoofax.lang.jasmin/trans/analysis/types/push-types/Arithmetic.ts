module types/push-types/Arithmetic

imports
  include/JasminXT
  analysis/types/constraints

type rules
  IADD()  +
  IAND()  +
  IDIV()  +
  IMUL()  +
  INEG()  +
  IOR()   +
  IREM()  +
  ISHL()  +
  ISHR()  +
  ISUB()  +
  IUSHR() +
  IXOR()  has push-type [Int()]
        
  LADD()  +
  LAND()  +
  LDIV()  +
  LMUL()  +
  LNEG()  +
  LOR()   +
  LREM()  +
  LSHL()  +
  LSHR()  +
  LSUB()  +
  LUSHR() +
  LXOR()  has push-type [Long()]
        
  FADD() +
  FDIV() +
  FMUL() +
  FNEG() +
  FREM() +
  FSUB() has push-type [Float()]
        
  DADD() +
  DDIV() +
  DMUL() +
  DNEG() +
  DREM() +
  DSUB() has push-type [Double()]
        
  IINC(_,_)   +
  IINC_W(_,_) has push-type []
  
  FCMPG() +
  FCMPL() has push-type [Int()]
        
  DCMPG() +
  DCMPL() has push-type [Int()]
        
  LCMP()  has push-type [Int()]