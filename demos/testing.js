//Test
function setup()
{
    //Testing out the debug class
    Debug.backgroundColour = "purple";
    Debug.textColour = 'white';
    Debug.Log(" RestitutionJS Running... ");
    Debug.ResetFormatting();
    
    Debug.CreateGroup('Debug Testing');
    Debug.Log("Log");
    Debug.Info("Info");
    Debug.Warning("Warning");
    Debug.Error("Error");
    Debug.EndGroup();
    
    //Testing the vector class
    var foo = new Vector2(1, 1);
    
    Debug.CreateGroup('Vector Testing');
    Debug.Log("Foo: " + Vector2.ToString(foo));
    Debug.Log("Magnitude: " + foo.Magnitude());
    Debug.Log("SqrMagnitude: " + foo.SqrMagnitude());
    Debug.Log("Normalize: " + Vector2.ToString(foo.Normalize()));
    
    Debug.Log("[0]: " + foo.ArrayRef(0));
    Debug.Log("[1]: " + foo.ArrayRef(1));
    
    //Test the static vector functions
    var a = new Vector2(-4, -1);
    var b = new Vector2(0, 1);
    
    Debug.Spacer();
    Debug.Log("A: " + Vector2.ToString(a));
    Debug.Log("B: " + Vector2.ToString(b));
    Debug.Log("Dot: " + Vector2.Dot(a, b));
    Debug.Log("Det: " + Vector2.Det(a, b));
    Debug.Log("Angle: " + (Vector2.Angle(a, b) / (Math.PI / 180)));
    Debug.Log("Distance: " + Vector2.Distance(a, b));
    Debug.Log("SqrDistance: " + Vector2.SqrDistance(a, b));
    Debug.Log("Lerp: " + Vector2.ToString(Vector2.Lerp(a, b, 0.5)));
    Debug.Log("LerpUnclamped: " + Vector2.ToString(Vector2.LerpUnclamped(a, b, 1.5)));
    Debug.Log("SetMagnitude: " + Vector2.ToString(Vector2.SetMagnitude(a, 1)));
    Debug.Log("ClampMagnitude: " + Vector2.ToString(Vector2.ClampMagnitude(a, -1, 2)));
    Debug.Log("Max: " + Vector2.ToString(Vector2.Max(a, b)));
    Debug.Log("Min: " + Vector2.ToString(Vector2.Min(a, b)));
    Debug.Log("Reflect: " + Vector2.ToString(Vector2.Reflect(new Vector2(1, 1), new Vector2(0, 1))));
    Debug.EndGroup();
    
    //Testing out the rand class
    Debug.CreateGroup('Random Testing');
    Debug.Log("Random:");
    Debug.Log("Range(0, 10): " + Rand.Range(0, 10));
    Debug.Log("Value(): " + Rand.Value());
    Debug.Log("RandInt(0, 10): " + Rand.RandInt(0, 10));
    Debug.Log("RandBin(): " + Rand.RandBin());
    Debug.EndGroup();
    
    //Testing out the mathf class
    Debug.CreateGroup('Math');
    Debug.Log("Mathf:");
    Debug.Log("Pi: " + Mathf.pi);
    Debug.Log("Tau: " + Mathf.tau);
    Debug.Log("Rounding: " + Mathf.rounding);
    Debug.Log("Infinite: " + Mathf.infinite);
    Debug.Log("DegToRad: " + Mathf.degToRad);
    Debug.Log("RadToDeg: " + Mathf.radToDeg);
    
    Debug.Spacer();
    Debug.Log("Sqrt(9): " + Mathf.Sqrt(9));
    Debug.Log("Pow(2, 8): " + Mathf.Pow(2, 8));
    Debug.Log("Root(27, 3): " + Mathf.Root(27, 3));
    Debug.Log("Sin(90 * Mathf.degToRad): " + Mathf.Sin(90 * Mathf.degToRad));
    Debug.Log("Cos(90): " + Mathf.Cos(90));
    Debug.Log("Tan(90): " + Mathf.Tan(90));
    Debug.Log("Asin(0.5): " + Mathf.Asin(0.5));
    Debug.Log("Acos(0.5): " + Mathf.Acos(0.5));
    Debug.Log("Atan(0.5): " + Mathf.Atan(0.5));
    Debug.Log("Abs(-10): " + Mathf.Abs(-10));
    
    Debug.Spacer();
    Debug.Log("Ceil(10.2): " + Mathf.Ceil(10.2));
    Debug.Log("Floor(10.9): " + Mathf.Floor(10.9));
    Debug.Log("Max(3, 7): " + Mathf.Max(3, 7));
    Debug.Log("Min(3, 7): " + Mathf.Min(3, 7));
    Debug.Log("Round(10.6): " + Mathf.Round(10.6));
    
    Debug.Spacer();
    Debug.Log("Logbase(1000, 10): " + Mathf.Logbase(1000, 10));
    Debug.Log("Log(1000): " + Mathf.Log(1000));
    Debug.Log("Log2(64): " + Mathf.Log2(64));
    Debug.Log("Log10(1000): " + Mathf.Log10(1000));
    
    Debug.Spacer();
    Debug.Log("Mod(21, 2): " + Mathf.Mod(21, 2));
    Debug.Log("Clamp(31, 0, 10): " + Mathf.Clamp(31, 0, 10));
    Debug.Log("Clamp01(2): " + Mathf.Clamp01(2));
    Debug.Log("Lerp(0, 10, 0.2): " + Mathf.Lerp(0, 10, 0.2));
    Debug.Log("LerpUnclamped(0, 10, 1.2): " + Mathf.LerpUnclamped(0, 10, 1.2));
    Debug.Log("SmoothStep(0, 10, 5): " + Mathf.SmoothStep(0, 10, 5));
    Debug.Log("SmootherStep(0, 10, 5): " + Mathf.SmootherStep(0, 10, 5));
    Debug.Log("SmoothStep01(0.5): " + Mathf.SmoothStep01(0.5));
    Debug.Log("SmootherStep01(0.5): " + Mathf.SmootherStep01(0.5));
    Debug.Log("Sign(-13): " + Mathf.Sign(-13));
    Debug.Log("MoveTowards(0, 10, 20): " + Mathf.MoveTowards(0, 10, 20));
    Debug.Log("Mathf.MoveTowardsAngle(0, PI, PI / 2): (radians)" + Mathf.MoveTowardsAngle(0, Mathf.pi, Mathf.pi / 2));
    Debug.Log("Bounce(15, 0, 10): " + Mathf.Bounce(15, 0, 10));
    Debug.Log("Bounce0(15, 10): " + Mathf.Bounce0(15, 10));
    Debug.Log("Bounce01(1.5): " + Mathf.Bounce01(1.5));
    Debug.Log("DeltaAngle(PI, PI / 2): " + Mathf.DeltaAngle(Mathf.pi, Mathf.pi / 2));
    Debug.Log("ClosestBinaryPower(63): " + Mathf.ClosestBinaryPower(63));
    Debug.Log("IsBinaryPower(63): " + Mathf.IsBinaryPower(63));
    Debug.Log("MaxArray([2, 64, 8]): " + Mathf.MaxArray([2, 64, 8]));
    Debug.Log("MinArray([2, 64, 8]): " + Mathf.MinArray([2, 64, 8]));
    Debug.Log("Approximatly(3.0, Sqrt(9)): " + Mathf.Approximatly(3.0, Mathf.Sqrt(9)));
    Debug.EndGroup();
};