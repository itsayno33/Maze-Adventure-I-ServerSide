<?php

class Point {
    public int $x;
    public int $y;
    public function __construct(int $x = 0, int $y = 0)
    {
        $this->x  = $x;
        $this->y  = $y;
    }
    public function is_exist(int $x, int $y): bool {
        return ($this->x == $x) && ($this->y == $y);
    }
}

class PointLink extends Point {
    public int $di;
    public function __construct(int $x = 0, int $y = 0, int $di = -1)
    {
        parent::__construct($x, $y);
        $this->di = $di;
    }
}



class PointSet {
    public array $set;
    public function __construct()
    {
        $this->set = [];
    }
    public function push(Point $p): void {
        array_push($this->set, $p);
        return;
    }
    public function get_point(int $x, int $y): ?Point {
        foreach ($this->set as $p) {
            if ($p->is_exist($x, $y)) return $p;
        }
        return null;            
    }
    public function remove(Point $p): void {
        $this->remove_xy($p->x, $p->y);
        return;
    }
    public function remove_xy(int $x, int $y): void {
        for ($i = 0; $i < count($this->set); $i++) {
            if ($this->set[$i]->is_exist($x, $y)) {
                unset($this->set[$i]);
                $this->set = array_values($this->set);
                break;
            }
        }
        return;
    }
    public function is_exist(int $x, int $y): bool {
        foreach ($this->set as $p) {
            if (!$p->is_exist($x, $y)) continue;
            return true;
        }
        return false;
    }
}

?>